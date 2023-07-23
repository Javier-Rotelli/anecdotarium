"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(email, password);
      }}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          className="input input-bordered"
          type="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          className="input input-bordered"
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="mt-6 form-control">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
