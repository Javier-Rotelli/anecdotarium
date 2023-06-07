import {
  Anecdote as AnectoteType,
  getAnecdotarium,
} from "@/models/anecdotariums";

import Anecdote from "@/app/anecdotariums/[id]/Anecdote";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { anecdotarium, anecdotes } = await getAnecdotarium(id);
  return (
    <div className="container h-full mt-6 columns-3xs grow">
      {anecdotes.map((a, i) => (
        <Anecdote key={i} anecdote={a} />
      ))}
      <Anecdote anecdote={{ anecdote: "new", boardId: "s" } as AnectoteType} />
    </div>
  );
}
