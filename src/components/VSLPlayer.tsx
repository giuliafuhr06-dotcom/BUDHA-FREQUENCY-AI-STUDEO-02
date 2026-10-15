import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  BRAND_NAME,
  CHECKOUT_URL,
  DELAYED_BUTTON_SECONDS,
  PRICE,
  VSL_EMBED_SRC,
  handleCheckoutClick,
  testMode,
  trackMetaCustom,
} from '../config';
import { Volume2, Maximize2, ShieldCheck, Sparkles, ArrowRight, RotateCcw, Play } from 'lucide-react';

interface PlayerJsInstance {
  on: (event: string, callback: (...args: any[]) => void) => void;
  play: () => void;
  pause: () => void;
  mute: () => void;
  unmute: () => void;
  setCurrentTime: (seconds: number) => void;
  getCurrentTime: (callback: (seconds: number) => void) => void;
  getDuration: (callback: (duration: number) => void) => void;
}

declare global {
  interface Window {
    playerjs?: {
      Player: new (element: HTMLIFrameElement) => PlayerJsInstance;
    };
  }
}

const STORAGE_KEY = 'budah_frequency_vsl_pos';

export const VSLPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<PlayerJsInstance | null>(null);

  // Check if testing mode is active (via config or URL query parameter ?test=true)
  const [isTestMode, setIsTestMode] = useState<boolean>(() => {
    if (testMode) return true;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('test') === 'true' || params.get('testmode') === 'true';
    }
    return false;
  });

  const [hasStartedListening, setHasStartedListening] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1400); // sensible default until duration is fetched
  const [showDelayedButton, setShowDelayedButton] = useState<boolean>(isTestMode);
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);
  const [savedResumeTime, setSavedResumeTime] = useState<number | null>(null);
  const [showResumePrompt, setShowResumePrompt] = useState<boolean>(false);

  // Tracking flags to ensure events fire exactly once
  const tracked25 = useRef<boolean>(false);
  const tracked50 = useRef<boolean>(false);
  const tracked75 = useRef<boolean>(false);

  // Check for existing saved resume timestamp from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseFloat(stored);
        if (!isNaN(parsed) && parsed > 15 && parsed < DELAYED_BUTTON_SECONDS) {
          setSavedResumeTime(parsed);
          setShowResumePrompt(true);
        }
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Format seconds into MM:SS for user display
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Initialize Bunny Player.js adapter
  useEffect(() => {
    let fallbackTimer: NodeJS.Timeout | null = null;
    let fallbackTickInterval: NodeJS.Timeout | null = null;
    let pollInterval: NodeJS.Timeout | null = null;

    const setupPlayerInstance = () => {
      if (!iframeRef.current || !window.playerjs) return false;

      try {
        const player = new window.playerjs.Player(iframeRef.current);
        playerRef.current = player;

        player.on('ready', () => {
          setIsPlayerReady(true);
          player.getDuration((d: number) => {
            if (d && d > 0) {
              setDuration(d);
            }
          });
        });

        player.on('timeupdate', (data: any) => {
          let sec = 0;
          let dur = duration;

          if (typeof data === 'number') {
            sec = data;
          } else if (data && typeof data === 'object') {
            if (typeof data.seconds === 'number') sec = data.seconds;
            if (typeof data.duration === 'number' && data.duration > 0) {
              dur = data.duration;
              setDuration(dur);
            }
          }

          if (sec >= 0) {
            setCurrentTime(sec);

            // Persist position every ~5 seconds for resume feature
            if (sec > 5) {
              try {
                localStorage.setItem(STORAGE_KEY, sec.toString());
              } catch {
                // Ignore localStorage errors
              }
            }

            // Fire real Meta Pixel milestones exactly once based on real playback
            if (dur > 0) {
              const ratio = sec / dur;
              if (ratio >= 0.25 && !tracked25.current) {
                tracked25.current = true;
                trackMetaCustom('VideoWatched25', {
                  content_name: BRAND_NAME,
                  seconds: Math.floor(sec),
                  percentage: 25,
                });
              }
              if (ratio >= 0.5 && !tracked50.current) {
                tracked50.current = true;
                trackMetaCustom('VideoWatched50', {
                  content_name: BRAND_NAME,
                  seconds: Math.floor(sec),
                  percentage: 50,
                });
              }
              if (ratio >= 0.75 && !tracked75.current) {
                tracked75.current = true;
                trackMetaCustom('VideoWatched75', {
                  content_name: BRAND_NAME,
                  seconds: Math.floor(sec),
                  percentage: 75,
                });
              }
            }

            // Check if delayed buy button should appear (21:55 or config time)
            if (sec >= DELAYED_BUTTON_SECONDS) {
              setShowDelayedButton(true);
            }
          }
        });

        return true;
      } catch (err) {
        console.warn('[Budah Frequency] Player.js initialization notice:', err);
        return false;
      }
    };

    // Attempt to bind Player.js immediately or retry briefly
    const bound = setupPlayerInstance();
    if (!bound) {
      pollInterval = setInterval(() => {
        if (setupPlayerInstance()) {
          if (pollInterval) clearInterval(pollInterval);
        }
      }, 500);
    }

    // Fallback: If Player.js doesn't report ready within 8 seconds, start a background timer
    // so the delayed buy button will still reveal normally, ensuring the sale is never blocked.
    fallbackTimer = setTimeout(() => {
      if (!isPlayerReady) {
        let fallbackElapsed = 0;
        fallbackTickInterval = setInterval(() => {
          fallbackElapsed += 1;
          setCurrentTime((prev) => Math.max(prev, fallbackElapsed));
          if (fallbackElapsed >= DELAYED_BUTTON_SECONDS) {
            setShowDelayedButton(true);
            if (fallbackTickInterval) clearInterval(fallbackTickInterval);
          }
        }, 1000);
      }
    }, 8000);

    return () => {
      if (pollInterval) clearInterval(pollInterval);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (fallbackTickInterval) clearInterval(fallbackTickInterval);
    };
  }, [duration, isPlayerReady]);

  // "Tap to Listen" Unmute & Play action
  const handleTapToListen = useCallback(() => {
    setHasStartedListening(true);
    setShowResumePrompt(false);

    if (playerRef.current) {
      try {
        playerRef.current.unmute();
        playerRef.current.setCurrentTime(0);
        playerRef.current.play();
      } catch (e) {
        console.warn('Playback initiation note:', e);
      }
    }
  }, []);

  // Resume playback from saved position
  const handleResumePlayback = useCallback(() => {
    setShowResumePrompt(false);
    setHasStartedListening(true);

    if (savedResumeTime && playerRef.current) {
      try {
        playerRef.current.unmute();
        playerRef.current.setCurrentTime(savedResumeTime);
        playerRef.current.play();
      } catch (e) {
        console.warn('Resume error:', e);
      }
    }
  }, [savedResumeTime]);

  // Restart video from beginning
  const handleStartOver = useCallback(() => {
    setShowResumePrompt(false);
    setHasStartedListening(true);

    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }

    if (playerRef.current) {
      try {
        playerRef.current.unmute();
        playerRef.current.setCurrentTime(0);
        playerRef.current.play();
      } catch (e) {
        console.warn('Start over notice:', e);
      }
    }
  }, []);

  // Enter full-screen view cleanly
  const handleToggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {
        // Fullscreen request denied or not permitted
      });
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Fake smooth progress bar calculation with easing curve (looks faster early on, slower near end)
  const calculatedRatio = duration > 0 ? Math.min(1, currentTime / duration) : 0;
  // Non-linear easing curve: power of 0.65 makes it advance eagerly in the first 5 minutes
  const easedPercent = Math.min(100, Math.max(3, Math.pow(calculatedRatio, 0.65) * 100));

  return (
    <section id="vsl-presentation" className="relative py-12 md:py-20 px-4 flex flex-col items-center">
      {/* Background ambient lighting behind player */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[550px] bg-gradient-to-tr from-amber-500/10 via-purple-600/15 to-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header alert / framing for VSL */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Special Sacred Sound Masterclass</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight leading-snug">
          Please Watch This Short Presentation Before Accessing {BRAND_NAME}
        </h2>
        <p className="text-neutral-400 text-sm mt-2">
          Turn your sound on and plug in headphones for the optimum psychoacoustic resonance.
        </p>
      </div>

      {/* VERTICAL 9:16 Video Player Container */}
      <div className="w-full max-w-[390px] sm:max-w-[410px] mx-auto">
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-neutral-700/60 bg-black"
          style={{ aspectRatio: '9/16' }}
        >
          {/* Bunny Stream Embedded iFrame */}
          <iframe
            ref={iframeRef}
            src={VSL_EMBED_SRC}
            title={`${BRAND_NAME} Official Video Presentation`}
            loading="lazy"
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen={true}
            className="absolute inset-0 w-full h-full border-0 z-10 pointer-events-auto"
          />

          {/* TAP TO LISTEN PULSING OVERLAY (shown initially until viewer engages) */}
          {!hasStartedListening && !showResumePrompt && (
            <div
              onClick={handleTapToListen}
              className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-black/50 p-6 text-center select-none"
            >
              <div className="relative mb-5 flex items-center justify-center">
                {/* Concentric pulsing acoustic rings */}
                <span className="absolute w-24 h-24 rounded-full bg-amber-400/20 animate-ping" />
                <span className="absolute w-20 h-20 rounded-full bg-amber-500/30 animate-pulse" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center text-neutral-950 shadow-[0_0_30px_rgba(245,158,11,0.7)]">
                  <Volume2 className="w-8 h-8 fill-neutral-950 stroke-neutral-950" />
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                Click To Unmute &amp; Listen
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-2 max-w-[260px] leading-relaxed drop-shadow">
                Sound is currently muted. Tap to listen with full audio immersion.
              </p>
              <div className="mt-4 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 animate-bounce">
                <Play className="w-3.5 h-3.5 fill-amber-300" />
                <span>Tap to start with audio</span>
              </div>
            </div>
          )}

          {/* RESUME MODAL OVERLAY (if user returns with saved progress) */}
          {showResumePrompt && (
            <div className="absolute inset-0 z-35 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 text-center select-none">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-4">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Welcome Back</h3>
              <p className="text-xs text-neutral-300 mb-5 max-w-[260px]">
                You left off at {savedResumeTime ? formatTime(savedResumeTime) : 'earlier in the presentation'}. Would you like to resume?
              </p>
              <div className="flex flex-col gap-2.5 w-full max-w-[240px]">
                <button
                  type="button"
                  onClick={handleResumePlayback}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-neutral-950 font-semibold text-sm shadow-lg hover:brightness-105 active:scale-95 transition-all"
                >
                  Resume Presentation
                </button>
                <button
                  type="button"
                  onClick={handleStartOver}
                  className="w-full py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-300 text-xs font-medium transition-all"
                >
                  Start Over From Beginning
                </button>
              </div>
            </div>
          )}

          {/* TRANSPARENT SHIELD LAYER
              Placed over the iframe once playback starts to prevent pausing on accidental taps
              and lock the native timeline so skipping is not possible */}
          {hasStartedListening && (
            <div
              className="absolute inset-0 z-20 pointer-events-auto bg-transparent"
              onClick={(e) => {
                // Prevent click through to video timeline or pause
                e.preventDefault();
              }}
            />
          )}

          {/* Clean Fullscreen Button in Corner (accessible above shield) */}
          <button
            type="button"
            onClick={handleToggleFullscreen}
            aria-label="Toggle Fullscreen"
            className="absolute top-3 right-3 z-25 p-2 rounded-full bg-black/40 hover:bg-black/70 text-neutral-200 hover:text-white backdrop-blur-md border border-white/10 transition-colors pointer-events-auto"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* FAKE SMOOTH NON-CLICKABLE PROGRESS BAR (Advances on real time with gentle easing) */}
        <div className="mt-3 w-full">
          <div className="w-full h-1.5 bg-neutral-800/80 rounded-full overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-teal-400 via-amber-400 to-yellow-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${easedPercent}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-1.5 px-1 font-mono">
            <span>Harmonic Calibration</span>
            <span className="flex items-center gap-1 text-amber-400/90">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Live Resonance
            </span>
          </div>
        </div>

        {/* Small note below the player: skipping ahead is not allowed */}
        <p className="text-center text-xs text-neutral-400 mt-3 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400/80 inline-block" />
          <span>For the deepest resonance and complete experience, skipping ahead is disabled.</span>
        </p>

        {/* Owner Test Mode Indicator (for effortless launch testing without waiting 21:55) */}
        {isTestMode && (
          <div className="mt-3 py-1.5 px-3 rounded-lg bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs text-center">
            <span className="font-semibold">TEST MODE ACTIVE:</span> Delayed checkout button is visible for testing.
          </div>
        )}

        {/* DELAYED BUY BUTTON (fades in when real video time hits 21:55 or testMode) */}
        {showDelayedButton ? (
          <div className="mt-8 transition-all duration-1000 transform translate-y-0 opacity-100 flex flex-col items-center">
            <button
              type="button"
              onClick={() => handleCheckoutClick('vsl_delayed_button')}
              className="w-full group relative overflow-hidden py-4 sm:py-5 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-neutral-950 font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_50px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 animate-pulse-gold cursor-pointer"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-in-out" />
              <div className="flex items-center justify-center gap-2.5 relative z-10">
                <span>Unlock All 12 Frequencies – {PRICE}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <div className="flex items-center justify-center gap-3 mt-3 text-xs text-neutral-300">
              <span className="flex items-center gap-1 text-amber-300/90 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                7-Day Money-Back Guarantee
              </span>
              <span className="text-neutral-500">•</span>
              <span>Instant Digital Access</span>
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center text-xs text-neutral-400 italic">
            Special purchase opportunity will appear right here as the presentation concludes...
          </div>
        )}
      </div>
    </section>
  );
};
