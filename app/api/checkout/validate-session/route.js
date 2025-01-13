import { NextResponse } from "next/server";
import stripe from "../../../../lib/stripe";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Session ID is required" },
      { status: 400 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    return NextResponse.json({
      productName: lineItems.data[0]?.description || "Unknown Product",
      amount: session.amount_total || 0,
      paymentStatus: session.payment_status || "unknown",
    });
  } catch (error) {
    console.error("Error validating session:", error);
    return NextResponse.json({ error: "Invalid session ID" }, { status: 400 });
  }
}
