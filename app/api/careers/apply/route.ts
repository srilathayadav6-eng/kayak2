import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { jobId, name, email, phone, resumeUrl, coverNote } = body;

    if (!name || !email || !resumeUrl) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, resumeUrl)" },
        { status: 400 }
      );
    }

    console.log("Job application received:", { jobId, name, email, resumeUrl });

    return NextResponse.json({
      success: true,
      message: "Job application submitted successfully.",
    });
  } catch (error) {
    console.error("Error in /api/careers/apply:", error);
    return NextResponse.json(
      { error: "Failed to submit job application" },
      { status: 500 }
    );
  }
}
