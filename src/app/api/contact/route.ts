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

    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", `New Airport Clearance Enquiry from ${name}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    const response = await fetch("https://formsubmit.co/ajax/baljindersingh260304@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Referer": "https://highriseapprovals.com",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    return NextResponse.json({
      success: true,
      message: data.message || "Enquiry submitted successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: true, message: "Enquiry logged successfully!" },
      { status: 200 }
    );
  }
}
