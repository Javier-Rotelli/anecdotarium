import { NextResponse } from "next/server";
import { createAnecdotarium } from "@/models/anecdotariums";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const data = await createAnecdotarium({ name: body.name, users: body.users });
  return NextResponse.json(data);
}
