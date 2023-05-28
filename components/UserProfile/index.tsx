"use client";
import { UserIcon } from "@heroicons/react/24/solid";
import styles from "./userProfile.module.css";
import UserPic from "./UserPic";
import { useState } from "react";
import UserPanel from "./UserPanel";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button className={styles.userProfile} onClick={toggleIsOpen}>
        {/* <UserPic /> */}
        <UserIcon />
      </button>
      {isOpen ? <UserPanel /> : null}
    </>
  );
};

export default UserProfile;
