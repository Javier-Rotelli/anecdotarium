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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register(email, password);
      }}
    >
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
        <button className="btn btn-primary" type="submit">
          Signup
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
