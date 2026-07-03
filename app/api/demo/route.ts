import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, companyName, phone, employees, industry, productInterest, useCase, preferredTime } = body;

    if (!name || !email || !companyName) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, companyName)" },
        { status: 400 }
      );
    }

    console.log("Demo request received:", { name, email, companyName, productInterest });

    return NextResponse.json({
      success: true,
      message: "Demo request received successfully.",
    });
  } catch (error) {
    console.error("Error in /api/demo:", error);
    return NextResponse.json(
      { error: "Failed to submit demo request" },
      { status: 500 }
    );
  }
}
