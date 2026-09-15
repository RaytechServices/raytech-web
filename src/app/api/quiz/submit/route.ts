import { NextResponse } from "next/server";
import {
  ENTRY_IDS,
  FORM_ACTION_URL,
  formIsConfigured,
  type FormFieldKey,
} from "../../../quiz/form-config";

export async function POST(req: Request) {
  if (!formIsConfigured() || !FORM_ACTION_URL) {
    return NextResponse.json(
      { ok: false, reason: "Form not configured yet" },
      { status: 500 }
    );
  }

  let payload: Partial<Record<FormFieldKey, string>>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, reason: "Invalid JSON" },
      { status: 400 }
    );
  }

  const body = new URLSearchParams();
  (Object.keys(ENTRY_IDS) as FormFieldKey[]).forEach((key) => {
    const entry = ENTRY_IDS[key];
    if (!entry) return;
    body.append(entry, payload[key] ?? "");
  });
  body.set("fvv", "1");
  body.set("pageHistory", "0");

  try {
    const res = await fetch(FORM_ACTION_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      redirect: "follow",
    });
    const text = await res.text();
    const recorded = /response has been recorded/i.test(text);
    if (!recorded) {
      return NextResponse.json(
        {
          ok: false,
          reason: `Google Form did not confirm (HTTP ${res.status})`,
        },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, reason: String(e) },
      { status: 502 }
    );
  }
}
