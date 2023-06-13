"use client";
import walter from "../../../../components/font";
import { PencilIcon } from "@heroicons/react/24/outline";
import styles from "./anecdote.module.css";
import { Anecdote } from "@/models/anecdotariums";
import React, { useRef, useState } from "react";
import AnecdoteModal from "./AnecdoteModal";

const AnecdoteCard = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className={`w-full h-auto shadow-xl card card-compact card-bordered bg-accent break-inside-avoid ${styles.anecdote}`}
    style={style}
  >
    {children}
  </div>
);

type Props = {
  anecdote: Anecdote;
};

export default function Anecdote({ anecdote: { anecdote, image } }: Props) {
  const rotation = useRef(Math.random() * 2 - 1);
  return (
    <AnecdoteCard style={{ transform: `rotate(${rotation.current}deg)` }}>
      {image ? (
        <figure>
          <img src={image} alt="" />
        </figure>
      ) : null}
      <div className="card-body">
        {/* <h2 className="card-title">asd</h2> */}
        <p>{anecdote}</p>
      </div>
    </AnecdoteCard>
  );
}

export const CreateAnecdote = ({ boardId }: { boardId: string }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AnecdoteCard>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Add anecdote!</h2>
          <p>Share your own story!</p>
          <div className="justify-center card-actions">
            <button
              className="btn btn-neutral"
              onClick={() => setModalOpen(true)}
            >
              Add <PencilIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </AnecdoteCard>
      <AnecdoteModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        boardId={boardId}
      />
    </>
  );
};
