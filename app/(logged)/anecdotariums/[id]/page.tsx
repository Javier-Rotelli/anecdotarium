import { getAnecdotarium } from "@/models/anecdotariums";

import styles from "./page.module.css";
import Anecdote from "@/app/(logged)/anecdotariums/[id]/Anecdote";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { anecdotarium, anecdotes } = await getAnecdotarium(id);
  return (
    <div className={styles.container}>
      {anecdotes.map((a, i) => (
        <Anecdote key={i} anecdote={a} />
      ))}
    </div>
  );
}
