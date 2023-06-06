"use client";
import EmailSelect from "./EmailSelect";
import { useEffect, useRef, useState } from "react";

type props = {
  isOpen: boolean;
  onClose: () => void;
};

const AnecdotariumModal = ({ isOpen, onClose }: props) => {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  const [name, setName] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const isValid = name !== "";

  const onSave = async () => {
    setSaving(true);
    await fetch("api/anecdotarium", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, users: emails }),
    });
    setSaving(false);
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
        <h3 className="text-lg font-bold">Hello!</h3>
        <div className="w-full form-control">
          <label className="label">
            <span className="label-text-alt">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="w-full input input-bordered"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <EmailSelect value={emails} setValue={setEmails} />
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

export default AnecdotariumModal;
