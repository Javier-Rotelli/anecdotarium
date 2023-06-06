import { KeyboardEventHandler, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import styles from "./emailSelect.module.css";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type EmailProps = {
  email: string;
  onRemove: (email: string) => void;
};
const Email = ({ email, onRemove }: EmailProps) => (
  <li
    className="cursor-pointer badge badge-outline"
    onClick={() => onRemove(email)}
  >
    {email}
    <TrashIcon className="inline-block w-4 h-4 pl-1 stroke-current" />
  </li>
);

type Props = {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
};
const EmailSelect = ({ value, setValue }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const [isValid, setIsValid] = useState(false);

  const handleAddEmail = () => {
    setValue((prev) => [...prev, inputValue]);
    setInputValue("");
    setIsValid(false);
  };
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    const isValid = isValidNewOption(inputValue);
    setIsValid(isValid);
    switch (event.key) {
      case "Enter":
      case "Tab":
        event.preventDefault();
        if (!isValid) {
          return;
        }
        handleAddEmail();
    }
  };
  const onRemove = (email: string) => {
    setValue((prev) => prev.filter((v) => v !== email));
  };

  const isValidNewOption = (inputValue: string) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(inputValue);
  };

  const components = {
    DropdownIndicator: null,
  };

  return (
    <>
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text-alt">People</span>
        </label>
        <div className="join">
          <input
            type="text"
            placeholder="Type emails here"
            className={classNames("w-full input input-bordered join-item", {
              "input-error": !isValid && inputValue !== "",
            })}
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="rounded-r-full btn join-item"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddEmail();
            }}
            disabled={!isValid}
          >
            Add
          </button>
        </div>
      </div>

      <ul className={styles.emailList}>
        {value.map((email) => (
          <Email key={email} email={email} onRemove={onRemove} />
        ))}
      </ul>
      <div className="prose">
        <p>
          People on this list will get access to the board, and will get an
          email to join Anecdoatrium if they don&apos;t have an account
        </p>
      </div>
    </>
  );
};

export default EmailSelect;
