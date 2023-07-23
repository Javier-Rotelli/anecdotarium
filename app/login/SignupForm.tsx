"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";
import FormInput from "./FormInput";
import { register } from "@/lib/auth";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");

  return (
    <>
      <FormInput
        name="email"
        label="Email*"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormInput
        name="password"
        label="Password*"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormInput
        name="repPassword"
        label="Repeat your password*"
        type="password"
        value={repPassword}
        onChange={(e) => setRepPassword(e.target.value)}
      />

      <div className="mt-6 form-control">
        <button
          className="btn btn-primary"
          onClick={() => register(email, password)}
        >
          Signup
        </button>
      </div>
    </>
  );
};

export default SignupForm;
