import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  NORTHEAST_LEAD_CONVERSION_SEND_TO,
  SIKKIM_LEAD_CONVERSION_SEND_TO,
  leadFormConversionSendTo,
  leadUserData,
  normalizeLeadEmail,
  normalizeLeadPhone,
  shouldTrackLeadConversion,
  trackLeadFormConversion,
} from "../src/lib/google-ads-lead.ts";

const NORTHEAST = "AW-17728878047/eIW6CJr998AdEN_r5IVC";
const SIKKIM = "AW-17728878047/U6MuCMzM88AdEN_r5IVC";

describe("hostname to lead conversion label", () => {
  it("maps booknortheast.in and www to the Northeast label", () => {
    assert.equal(NORTHEAST_LEAD_CONVERSION_SEND_TO, NORTHEAST);
    assert.equal(leadFormConversionSendTo("booknortheast.in"), NORTHEAST);
    assert.equal(leadFormConversionSendTo("www.booknortheast.in"), NORTHEAST);
    assert.equal(leadFormConversionSendTo("BookNortheast.IN"), NORTHEAST);
  });

  it("maps booksikkim.in and www to the Sikkim label", () => {
    assert.equal(SIKKIM_LEAD_CONVERSION_SEND_TO, SIKKIM);
    assert.equal(leadFormConversionSendTo("booksikkim.in"), SIKKIM);
    assert.equal(leadFormConversionSendTo("www.booksikkim.in"), SIKKIM);
  });

  it("does not map unknown hosts, localhost, or other domains", () => {
    for (const host of [
      "localhost",
      "127.0.0.1",
      "localhost:3000",
      "booknortheast.com",
      "www.booknortheast.com",
      "example.com",
      "",
    ]) {
      assert.equal(leadFormConversionSendTo(host), undefined, host);
    }
  });
});

describe("customer data", () => {
  it("normalizes email and keeps only a verified Indian mobile in E.164", () => {
    assert.equal(normalizeLeadEmail("  Guest@Example.com "), "guest@example.com");
    assert.equal(normalizeLeadEmail("not-an-email"), undefined);
    assert.equal(normalizeLeadEmail(""), undefined);
    assert.equal(normalizeLeadPhone("9147752662"), "+919147752662");
    assert.equal(normalizeLeadPhone("+91 91477 52662"), "+919147752662");
    assert.equal(normalizeLeadPhone("12345"), undefined);

    assert.deepEqual(
      leadUserData({ email: " Guest@Example.com ", phone: "9147752662" }),
      { email: "guest@example.com", phone_number: "+919147752662" }
    );
    assert.deepEqual(leadUserData({ email: "bad", phone: "9147752662" }), {
      phone_number: "+919147752662",
    });
    assert.equal(leadUserData({ email: "", phone: "000" }), undefined);
  });
});

type GtagCall = unknown[];

function conversionCalls(calls: GtagCall[]) {
  return calls.filter(
    (call) => call[0] === "event" && (call[1] as string) === "conversion"
  );
}

describe("conversion firing", () => {
  it("sends exactly one conversion after a successful verified enquiry", () => {
    const calls: GtagCall[] = [];
    const gtag = (...args: unknown[]) => {
      calls.push(args);
    };
    let alreadyFired = false;

    const allowed = shouldTrackLeadConversion({
      whatsappVerified: true,
      responseOk: true,
      alreadyFired,
    });
    assert.equal(allowed, true);
    alreadyFired = true;
    const fired = trackLeadFormConversion(
      { email: " Guest@Example.com ", phone: "9147752662" },
      { host: "www.booknortheast.in", gtag }
    );

    assert.equal(fired, true);
    assert.equal(calls.length, 2);
    assert.deepEqual(calls[0], [
      "set",
      "user_data",
      { email: "guest@example.com", phone_number: "+919147752662" },
    ]);
    assert.deepEqual(calls[1], [
      "event",
      "conversion",
      { send_to: NORTHEAST, value: 1.0, currency: "INR" },
    ]);
    assert.equal(conversionCalls(calls).length, 1);

    const second = shouldTrackLeadConversion({
      whatsappVerified: true,
      responseOk: true,
      alreadyFired,
    });
    assert.equal(second, false);
    assert.equal(conversionCalls(calls).length, 1);
  });

  it("uses the Sikkim label on booksikkim.in", () => {
    const calls: GtagCall[] = [];
    const fired = trackLeadFormConversion(
      { phone: "9876543210" },
      {
        host: "booksikkim.in",
        gtag: (...args: unknown[]) => {
          calls.push(args);
        },
      }
    );
    assert.equal(fired, true);
    assert.equal(conversionCalls(calls).length, 1);
    assert.equal(
      (conversionCalls(calls)[0][2] as { send_to: string }).send_to,
      SIKKIM
    );
  });

  it("sends nothing when the API response is not ok", () => {
    assert.equal(
      shouldTrackLeadConversion({
        whatsappVerified: true,
        responseOk: false,
        alreadyFired: false,
      }),
      false
    );
  });

  it("sends nothing when WhatsApp OTP is not verified", () => {
    assert.equal(
      shouldTrackLeadConversion({
        whatsappVerified: false,
        responseOk: true,
        alreadyFired: false,
      }),
      false
    );
  });

  it("does not send a production conversion on localhost or an unknown host", () => {
    for (const host of ["localhost", "127.0.0.1", "booknortheast.com", "example.com"]) {
      const calls: GtagCall[] = [];
      const fired = trackLeadFormConversion(
        { email: "guest@example.com", phone: "9147752662" },
        {
          host,
          gtag: (...args: unknown[]) => {
            calls.push(args);
          },
        }
      );
      assert.equal(fired, false, host);
      assert.equal(calls.length, 0, host);
    }
  });

  it("does not send a conversion when gtag is missing", () => {
    assert.equal(
      trackLeadFormConversion(
        { phone: "9147752662" },
        { host: "booknortheast.in", gtag: undefined }
      ),
      false
    );
  });
});
