"use client";
import walter from "../../../../../components/font";

import styles from "./anecdote.module.css";
import { Anecdote } from "@/models/anecdotariums";
import { useRef } from "react";

type Props = {
  anecdote: Anecdote;
};
export default function Anecdote({ anecdote: { anecdote, image } }: Props) {
  const rotation = useRef(Math.random() * 3 - 1.5);
  return (
    <div
      style={{ transform: `rotate(${rotation.current}deg)` }}
      className={`${styles.anecdote} ${walter.variable}`}
    >
      <span>{anecdote}</span>
      <div className={styles.author}> - </div>
    </div>
  );
}
