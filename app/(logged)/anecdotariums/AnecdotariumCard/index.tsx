"use client";
import type { Anecdotarium } from "@/models/anecdotariums";

import { PlusCircleIcon } from "@heroicons/react/24/outline";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import AnecdotariumModal from "../AnecdotariumModal";
import classNames from "classnames";

const Frame = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div
    onClick={onClick}
    className={classNames(
      "card w-64 h-64 bg-base-100 shadow-xl cursor-pointer",
      className
    )}
  >
    <div className="card-body">{children}</div>
  </div>
);

type props = {
  anecdotarium: Anecdotarium;
};

const Anecdotarium = ({ anecdotarium }: props) => {
  const router = useRouter();
  return (
    <Frame
      onClick={() => {
        router.push(`anecdotariums/${anecdotarium.$id}`);
      }}
    >
      <h2 className="card-title">{anecdotarium.name}</h2>
      <div className="self-end justify-evenly card-actions">
        {anecdotarium.users.map((user) => (
          <div className="badge badge-outline" key={user}>
            {user}
          </div>
        ))}
      </div>
    </Frame>
  );
};

export const CreateAnecdotarium = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Frame className={styles.createFrame} onClick={() => setModalOpen(true)}>
        <button className={styles.create} role="button">
          <PlusCircleIcon />
        </button>
      </Frame>
      <AnecdotariumModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default Anecdotarium;
