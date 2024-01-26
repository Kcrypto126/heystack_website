import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const data = await fetch("https://fakestoreapi.com/products/1").then((res) =>
    res.json()
  );
  return NextResponse.json(data, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
