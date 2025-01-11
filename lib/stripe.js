import stripe from "@/lib/stripeInstance";

export const fetchSessionDetails = async (sessionId) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);

    return {
      productName: lineItems.data[0]?.description || "Unknown Product",
      amount: session.amount_total || 0,
      paymentId: session.id || "N/A",
    };
  } catch (error) {
    console.error("Error fetching session details:", error);
    throw new Error("Invalid session");
  }
};
