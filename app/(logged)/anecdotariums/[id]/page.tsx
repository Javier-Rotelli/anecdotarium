import { getAnecdotes } from "@/models/anecdotes";

import styles from "./page.module.css";
import Anecdote from "@/app/(logged)/anecdotariums/[id]/Anecdote";

export default async function Page() {
  const anecdotes = await getAnecdotes();

  return (
    <div className={styles.container}>
      {anecdotes.map((a, i) => (
        <Anecdote key={i} anecdote={a} />
      ))}
    </div>
  );
}
