"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type props = {
  isOpen: boolean;
  onClose: () => void;
  boardId: string;
};

const AnecdoteModal = ({ isOpen, onClose, boardId }: props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const [anecdote, setAnecdote] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [saving, setSaving] = useState(false);

  const isValid = anecdote !== "";

  const onSave = async () => {
    setSaving(true);
    const formData = new FormData();
    formData.append("anecdote", anecdote);
    formData.append("boardId", boardId);
    if (image !== null) {
      formData.append("image", image);
    }

    await fetch("/api/anecdote", {
      method: "POST",

      body: formData,
    });
    setSaving(false);
    setAnecdote("");
    setImage(null);
    router.refresh();
    onClose();
  };

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <form method="dialog" className="modal-box" id="new-anec-modal">
        <button
          htmlFor="new-anec-modal"
          className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
        >
          ✕
        </button>
        <h3 className="text-lg font-bold">Tell your group a good story!</h3>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text-alt">Anecdote</span>
          </label>
          <textarea
            className="h-24 textarea textarea-bordered"
            placeholder="Share a good story with your people"
            onChange={(e) => {
              setAnecdote(e.target.value);
            }}
            value={anecdote}
          />
        </div>
        <div className="w-full max-w-xs form-control">
          <label className="label">
            <span className="label-text">(optional) Pick an image</span>
          </label>
          <input
            type="file"
            className="w-full max-w-xs file-input file-input-bordered"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
            disabled
            placeholder="Coming soon!"
          />
        </div>
        <div className="modal-action">
          <button className="btn btn-neutral">Close</button>
          <button
            className="btn btn-success"
            disabled={!isValid || saving}
            onClick={(e) => {
              e.preventDefault();
              onSave();
            }}
          >
            {saving ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default AnecdoteModal;
