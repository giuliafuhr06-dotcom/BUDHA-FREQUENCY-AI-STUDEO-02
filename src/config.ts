/**
 * Budah Frequency – Global Configuration & Tracking Utilities
 * BRAND NAME RULE: The product name is spelled exactly "Budah Frequency" everywhere.
 */

export const BRAND_NAME = "Budah Frequency";
export const VSL_EMBED_SRC = "https://player.mediadelivery.net/embed/778341/b6c60dd6-7ad5-4351-9ca0-83c78f3ae11d?autoplay=true&loop=false&muted=true&preload=true&responsive=true"; // Bunny Stream vertical VSL (iframe)
export const VSL_EMBED_CODE = `<div style="position:relative;padding-top:177.78%;"><iframe src="https://player.mediadelivery.net/embed/778341/b6c60dd6-7ad5-4351-9ca0-83c78f3ae11d?autoplay=true&loop=false&muted=true&preload=true&responsive=true" loading="lazy" style="border:0;position:absolute;top:0;height:100%;width:100%;" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;" allowfullscreen="true"></iframe></div>`; // exact embed code from Bunny, use it as the player
export const VSL_ASPECT = "9/16"; // vertical video
export const CHECKOUT_URL = "https://pay.hotmart.com/C107996219E";
export const BUY_BUTTON_APPEAR_AT = "21:55"; // mm:ss of REAL video time
export const PRICE = "$37";
export const GUARANTEE_DAYS = 7; // MUST match the guarantee configured in Hotmart; owner will confirm
export const CONTACT_EMAIL = "support@yourdomain.com"; // placeholder, owner will replace
export const testMode = false; // when true, the delayed buy button shows immediately

// Converts "21:55" into total seconds (1315)
export function parseTimeToSeconds(timeStr: string): number {
  const parts = timeStr.split(':').map((p) => parseInt(p.trim(), 10));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  }
  return 1315;
}

export const DELAYED_BUTTON_SECONDS = parseTimeToSeconds(BUY_BUTTON_APPEAR_AT);

/**
 * Robust Meta Pixel helper wrapped in try/catch to protect checkout flows
 * even if an ad-blocker or privacy extension blocks window.fbq.
 */
export function trackMetaCustom(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('trackCustom', eventName, params || {});
    }
  } catch (err) {
    console.warn(`[Budah Frequency] Meta Pixel custom event '${eventName}' skipped:`, err);
  }
}

export function trackMetaStandard(eventName: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq('track', eventName, params || {});
    }
  } catch (err) {
    console.warn(`[Budah Frequency] Meta Pixel standard event '${eventName}' skipped:`, err);
  }
}

/**
 * Handles purchase intent: records InitiateCheckout and opens Hotmart checkout URL.
 */
export function handleCheckoutClick(sourceLocation = 'landing_cta') {
  trackMetaStandard('InitiateCheckout', {
    content_name: BRAND_NAME,
    currency: 'USD',
    value: 37.0,
    source: sourceLocation,
  });

  if (typeof window !== 'undefined') {
    window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  }
}
