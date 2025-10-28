import { NextResponse } from "next/server";

// This route expects environment variables:
// SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXXX/exec
// WEBHOOK_TOKEN=your-secret-token-here

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const webhook = process.env.SHEET_WEBHOOK_URL;
    const token = process.env.WEBHOOK_TOKEN;

    if (!webhook) {
      return NextResponse.json(
        { message: "Server webhook not configured" },
        { status: 500 }
      );
    }

    if (!token) {
      return NextResponse.json(
        { message: "Server token not configured" },
        { status: 500 }
      );
    }

    // Forward the data to the Google Apps Script webhook with verification token
    const res = await fetch(webhook, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Verification-Token": token,
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { message: "Forward failed", detail: text },
        { status: 502 }
      );
    }

    const json = await res.json().catch(() => ({ ok: true }));
    return NextResponse.json({ message: "ok", result: json });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        message: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
