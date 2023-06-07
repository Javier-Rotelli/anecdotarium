import { Anecdotarium, getAnecdotariums } from "@/models/anecdotariums";

import styles from "./page.module.css";
import AnecdotariumComp, {
  CreateAnecdotarium,
} from "@/app/anecdotariums/AnecdotariumCard";

export default async function Page() {
  const anecdotariums = await getAnecdotariums();

  return (
    <div className={styles.container}>
      {anecdotariums.map((a, i) => (
        <AnecdotariumComp anecdotarium={a} key={i} />
      ))}
      <CreateAnecdotarium />
    </div>
  );
}
