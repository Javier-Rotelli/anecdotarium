"use client";
import walter from "../../../../components/font";

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
      className={`w-full h-auto shadow-xl card card-compact card-bordered bg-accent break-inside-avoid ${styles.anecdote}`}
      style={{ transform: `rotate(${rotation.current}deg)` }}
    >
      {image ? (
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
      ) : null}
      <div className="card-body">
        <h2 className="card-title">asd</h2>
        <p>{anecdote}</p>
      </div>
    </div>
  );
}
