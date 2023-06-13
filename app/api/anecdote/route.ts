import { NextResponse } from "next/server";
import { createAnecdote } from "@/models/anecdotes";

export async function POST(request: Request) {
  const data = await request.formData();
  const anecdote = data.get("anecdote");
  const boardId = data.get("boardId");
  // const file = (data.get("image") as File | null) ?? undefined;
  const res = await createAnecdote({ anecdote, boardId });
  return NextResponse.json(res);
}
