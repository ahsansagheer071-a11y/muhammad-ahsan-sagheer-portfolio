/**
 * Lightweight Analytics Event Tracking Utility
 * Safely forwards client events to dataLayer (Google Tag Manager / GA4)
 * or custom analytics providers without requiring external script dependencies.
 */

export type AnalyticsEvent =
  | "explore_work_click"
  | "get_in_touch_click"
  | "project_card_click"
  | "inquiry_started"
  | "inquiry_submitted"
  | "free_audit_click"
  | "tell_me_workflow_click"
  | "case_study_view"
  | "portfolio_filter_click"
  | "free_sample_cta_click"
  | "sample_creative_click";

export function trackEvent(
  eventName: AnalyticsEvent,
  properties?: Record<string, any>
) {
  if (typeof window === "undefined") return;

  try {
    // 1. Google Tag Manager / GA4 dataLayer
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        ...properties,
        timestamp: new Date().toISOString(),
      });
    }

    // 2. Window gtag support if present
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, properties);
    }

    // 3. Optional debug logger for development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event] ${eventName}`, properties || {});
    }
  } catch {
    // Silently ignore analytics errors so user experience is never impacted
  }
}
