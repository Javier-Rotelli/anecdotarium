"use client";
import { useState } from "react";
import classNames from "classnames";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Forms() {
  const [selectedTab, setSelectedTab] = useState("login");
  return (
    <>
      <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
        <div className="justify-center w-full tabs">
          <a
            className={classNames("tab tab-lg tab-bordered", {
              "tab-active": selectedTab === "login",
            })}
            onClick={() => setSelectedTab("login")}
          >
            Log in
          </a>
          <a
            className={classNames("tab tab-lg tab-bordered", {
              "tab-active": selectedTab === "signup",
            })}
            onClick={() => setSelectedTab("signup")}
          >
            Signup
          </a>
        </div>
        <div className="card-body">
          {selectedTab === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </>
  );
}
