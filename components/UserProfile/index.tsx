"use client";
import { UserIcon } from "@heroicons/react/24/solid";

import { useAuth } from "../AuthProvider";

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <UserIcon />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>{<a className="justify-between">{user?.name}</a>}</li>
          <li>
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserProfile;
