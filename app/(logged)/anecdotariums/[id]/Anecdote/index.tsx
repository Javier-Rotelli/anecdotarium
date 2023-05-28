"use client";
import walter from "../../../../../components/font";

import styles from "./anecdote.module.css";
import { Anecdote } from "@/models/anecdotes";
import { useRef } from "react";

type Props = {
  anecdote: Anecdote;
};
export default function Anecdote({ anecdote: { text, uid } }: Props) {
  const rotation = useRef(Math.random() * 3 - 1.5);
  return (
    <div
      style={{ transform: `rotate(${rotation.current}deg)` }}
      className={`${styles.anecdote} ${walter.variable}`}
    >
      <span>{text}</span>
      <div className={styles.author}> - {uid}</div>
    </div>
  );
}
