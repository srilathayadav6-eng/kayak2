import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, type, message, _honey } = body;

    // Honeypot spam check
    if (_honey) {
      return NextResponse.json({ success: true, message: "Request received" });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // In a live DB environment, write to Prisma DB
    // e.g. await prisma.lead.create({ data: { name, email, company, phone, type, message } })

    console.log("Contact submission received:", { name, email, type, company });

    return NextResponse.json({
      success: true,
      message: "Contact message submitted successfully.",
    });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { error: "Failed to submit contact message" },
      { status: 500 }
    );
  }
}
