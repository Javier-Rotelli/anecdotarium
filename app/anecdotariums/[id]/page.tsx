import {
  Anecdote as AnectoteType,
  getAnecdotarium,
} from "@/models/anecdotariums";

import Anecdote, { CreateAnecdote } from "@/app/anecdotariums/[id]/Anecdote";
import { getAnecdotes } from "@/models/anecdotes";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const anecdotarium = await getAnecdotarium(id);
  const anecdotes = await getAnecdotes(id);
  return (
    <div className="container h-full mt-6 columns-3xs grow">
      {anecdotes.map((a, i) => (
        <Anecdote key={i} anecdote={a} />
      ))}
      <CreateAnecdote boardId={id} />
    </div>
  );
}
