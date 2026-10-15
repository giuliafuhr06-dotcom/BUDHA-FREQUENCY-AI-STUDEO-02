import React from 'react';
import { BRAND_NAME, CONTACT_EMAIL, GUARANTEE_DAYS } from '../config';
import { X, Shield, FileText, RefreshCw, Mail } from 'lucide-react';

export type ModalType = 'privacy' | 'terms' | 'refund' | 'contact' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#0c0f1d] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto text-neutral-300 text-sm leading-relaxed"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* TEMPLATE – review before launch */}
        {activeModal === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <Shield className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-serif text-white">Privacy Policy</h3>
            </div>
            <p className="text-xs text-amber-300/80 mb-4 font-mono">
              /* TEMPLATE – review before launch */
            </p>
            <div className="space-y-4 text-neutral-300 text-xs sm:text-sm">
              <p>
                At <strong>{BRAND_NAME}</strong>, we respect and safeguard your personal privacy. This Privacy Policy details how we collect, handle, and protect your information when visiting our website or ordering our digital audio collections.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">1. Data We Collect &amp; Analytics</h4>
              <p>
                When accessing our landing page, anonymous usage metrics and device identifiers may be processed. We utilize Meta Pixel technology (Pixel ID: 1098147306547287) and standard cookie protocols to understand user engagement, evaluate video presentation progress, and optimize our advertising reach. No sensitive personal data is shared without your consent.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">2. Secure Order Processing</h4>
              <p>
                All payment processing, billing data handling, and digital order delivery are managed directly through our trusted merchant partner, Hotmart. We never store, process, or have direct access to your credit card or financial credentials on our servers.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">3. Email &amp; Communications</h4>
              <p>
                If you contact our support team at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 underline">{CONTACT_EMAIL}</a>, your email address is used exclusively to assist you and provide customer service. We do not sell, rent, or lease your information to third-party brokers.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">4. Your Privacy Rights</h4>
              <p>
                You may clear your browser cookies or configure ad tracking preferences at any time. For questions regarding your personal information, reach out to our team at {CONTACT_EMAIL}.
              </p>
            </div>
          </div>
        )}

        {/* TEMPLATE – review before launch */}
        {activeModal === 'terms' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-serif text-white">Terms of Use</h3>
            </div>
            <p className="text-xs text-amber-300/80 mb-4 font-mono">
              /* TEMPLATE – review before launch */
            </p>
            <div className="space-y-4 text-neutral-300 text-xs sm:text-sm">
              <p>
                Welcome to <strong>{BRAND_NAME}</strong>. By accessing this site or purchasing our digital audio tracks, you agree to be bound by the following terms and conditions.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">1. Digital Product &amp; Personal License</h4>
              <p>
                {BRAND_NAME} is an exclusively digital audio product consisting of 12 downloadable MP3 frequency tracks. Upon purchase, you are granted a non-exclusive, non-transferable personal license to listen on your personal devices. Commercial resale, broadcast, redistribution, or unauthorized file sharing is strictly prohibited.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">2. Non-Medical Wellness Disclaimer</h4>
              <p className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs leading-relaxed">
                <strong>Important Notice:</strong> {BRAND_NAME} is intended solely for relaxation, mindfulness, personal contemplation, and acoustic enjoyment. This product does not replace professional medical, psychiatric, or therapeutic care. Results may vary individually. Not intended to diagnose, treat, cure, or prevent any disease or medical condition. Always consult your qualified healthcare provider regarding health concerns.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">3. Listening Safety</h4>
              <p>
                Do not listen to harmonic or meditative sound frequencies while operating motor vehicles, heavy machinery, or engaging in tasks requiring alert physical focus.
              </p>
              <h4 className="text-white font-semibold text-sm pt-2">4. Intellectual Property</h4>
              <p>
                All audio master recordings, frequency compositions, graphics, and written materials belonging to {BRAND_NAME} are protected under copyright and international intellectual property laws.
              </p>
            </div>
          </div>
        )}

        {/* TEMPLATE – review before launch */}
        {activeModal === 'refund' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <RefreshCw className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-serif text-white">Refund Policy</h3>
            </div>
            <p className="text-xs text-amber-300/80 mb-4 font-mono">
              /* TEMPLATE – review before launch */
            </p>
            <div className="space-y-4 text-neutral-300 text-xs sm:text-sm">
              <p>
                We want you to experience <strong>{BRAND_NAME}</strong> with complete confidence and peace of mind.
              </p>
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/15 to-yellow-500/10 border border-amber-500/30 text-amber-200">
                <p className="font-semibold text-white mb-1">
                  {GUARANTEE_DAYS}-Day 100% Money-Back Guarantee
                </p>
                <p className="text-xs">
                  If for any reason you are not completely satisfied with your audio experience within {GUARANTEE_DAYS} days of your purchase date, you are entitled to a full, hassle-free refund.
                </p>
              </div>
              <h4 className="text-white font-semibold text-sm pt-2">How to Request Your Refund:</h4>
              <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Through Hotmart:</strong> You can request a refund directly within your Hotmart customer dashboard using the purchase confirmation email you received at checkout.
                </li>
                <li>
                  <strong>Direct Support:</strong> Alternatively, simply email our customer care team at <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-400 underline">{CONTACT_EMAIL}</a> with your Hotmart transaction code or purchase email, and our team will promptly assist you with processing your refund.
                </li>
              </ol>
              <p className="text-xs text-neutral-400 pt-2">
                Refunds are credited back to your original payment method in accordance with standard bank and payment gateway processing timelines.
              </p>
            </div>
          </div>
        )}

        {/* TEMPLATE – review before launch */}
        {activeModal === 'contact' && (
          <div>
            <div className="flex items-center gap-3 mb-4 text-amber-400">
              <Mail className="w-6 h-6" />
              <h3 className="text-xl sm:text-2xl font-serif text-white">Contact &amp; Support</h3>
            </div>
            <p className="text-xs text-amber-300/80 mb-4 font-mono">
              /* TEMPLATE – review before launch */
            </p>
            <div className="space-y-4 text-neutral-300 text-xs sm:text-sm">
              <p>
                Have questions about <strong>{BRAND_NAME}</strong>, accessing your audio files, or need assistance with your purchase? We are here to support you.
              </p>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <p className="text-xs text-neutral-400 uppercase tracking-wider">Official Support Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-semibold text-amber-300 hover:text-amber-200 transition-colors block"
                >
                  {CONTACT_EMAIL}
                </a>
                <p className="text-xs text-neutral-400">
                  Our customer care team typically responds within 24 business hours, Monday through Friday.
                </p>
              </div>
              <p className="text-xs text-neutral-400">
                Please have your Hotmart transaction number ready when contacting us regarding order lookups.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Close Button */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
