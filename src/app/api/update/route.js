import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Hello" }, { status: 200 });
}
export async function POST(req) {
  const payload = await req.json();
  const type = payload.type;

  try {
    const message = await fetch(
      `https://us.locogram.com/Contactus/email.json?type=${type}`,
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => response.json());

    return NextResponse.json(message, { status: 200 });
  } catch (err) {
    return NextResponse.json(err);
  }
}
