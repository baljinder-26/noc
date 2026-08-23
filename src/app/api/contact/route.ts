import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Submit lead directly to target email baljindersingh260304@gmail.com via FormSubmit AJAX API
    const response = await fetch("https://formsubmit.co/ajax/baljindersingh260304@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Airport Clearance Enquiry: ${name}`,
        "Full Name": name,
        "Mobile Number": phone,
        "Email Address": email,
        "Clearance Enquiry Details": message,
        _template: "table",
      }),
    });

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Enquiry submitted successfully! Email notification dispatched.",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Form submission failed." },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
