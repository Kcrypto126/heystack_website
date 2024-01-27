import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({ message: "Hello" }, { status: 200 });
}

export async function POST(req) {
  const payload = await req.json();
  const { data } = payload;
  const { title, slug } = data;

  const EmailMessage = {
    name: "Hey-Stack",
    email: "dummymail@heystack.com",
    subject: "New Blog published",
    message: `We have published a new blog on ${title} kindly check this at https://hey-stack.netlify.app/blogs/${slug}`,
  };

  try {
    const message = await fetch(
      "https://us.locogram.com/Contactus/email.json",
      {
        method: "POST",

        body: JSON.stringify(EmailMessage),
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
