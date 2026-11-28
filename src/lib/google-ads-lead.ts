export const GOOGLE_ADS_ID = "AW-17728878047";

/** Northeast lead action. The Google Ads action name is "Kerala Submit lead form". */
export const NORTHEAST_LEAD_CONVERSION_SEND_TO =
  "AW-17728878047/eIW6CJr998AdEN_r5IVC";

export const SIKKIM_LEAD_CONVERSION_SEND_TO =
  "AW-17728878047/U6MuCMzM88AdEN_r5IVC";

const LEAD_SEND_TO_BY_HOST: Record<string, string> = {
  "booknortheast.in": NORTHEAST_LEAD_CONVERSION_SEND_TO,
  "www.booknortheast.in": NORTHEAST_LEAD_CONVERSION_SEND_TO,
  "booksikkim.in": SIKKIM_LEAD_CONVERSION_SEND_TO,
  "www.booksikkim.in": SIKKIM_LEAD_CONVERSION_SEND_TO,
};

export type LeadCustomerData = {
  email?: string;
  phone?: string;
};

export type LeadUserData = {
  email?: string;
  phone_number?: string;
};

export function normalizeLeadHost(host: string): string {
  return host.split(":")[0]?.trim().toLowerCase() ?? "";
}

/** Exact production hosts only. Other hosts, including localhost, do not send a lead conversion. */
export function leadFormConversionSendTo(host: string): string | undefined {
  return LEAD_SEND_TO_BY_HOST[normalizeLeadHost(host)];
}

export function normalizeLeadEmail(email: string | undefined): string | undefined {
  const normalized = email?.trim().toLowerCase();
  if (!normalized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) {
    return undefined;
  }
  return normalized;
}

/** Verified Indian mobile numbers only, as E.164. */
export function normalizeLeadPhone(phone: string | undefined): string | undefined {
  const digits = phone?.replace(/\D/g, "") ?? "";
  const local = digits.length > 10 ? digits.slice(-10) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) return undefined;
  return `+91${local}`;
}

export function leadUserData(
  customer?: LeadCustomerData
): LeadUserData | undefined {
  const email = normalizeLeadEmail(customer?.email);
  const phoneNumber = normalizeLeadPhone(customer?.phone);
  if (!email && !phoneNumber) return undefined;
  return {
    ...(email ? { email } : {}),
    ...(phoneNumber ? { phone_number: phoneNumber } : {}),
  };
}

/**
 * Lead conversion is allowed only after OTP verification and a successful
 * enquiry response, and only once per submission cycle.
 */
export function shouldTrackLeadConversion(state: {
  whatsappVerified: boolean;
  responseOk: boolean;
  alreadyFired: boolean;
}): boolean {
  return state.whatsappVerified && state.responseOk && !state.alreadyFired;
}

type Gtag = (...args: unknown[]) => void;

/** Returns true only when a conversion event was sent. */
export function trackLeadFormConversion(
  customer?: LeadCustomerData,
  env: { host?: string; gtag?: Gtag } = {}
): boolean {
  const host =
    env.host ??
    (typeof window !== "undefined" ? window.location.hostname : "");
  const gtag =
    env.gtag ?? (typeof window !== "undefined" ? window.gtag : undefined);
  if (typeof gtag !== "function") return false;

  const sendTo = leadFormConversionSendTo(host);
  if (!sendTo) return false;

  const userData = leadUserData(customer);
  if (userData) {
    gtag("set", "user_data", userData);
  }

  gtag("event", "conversion", {
    send_to: sendTo,
    value: 1.0,
    currency: "INR",
  });
  return true;
}
