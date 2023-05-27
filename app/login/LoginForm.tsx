"use client";

import { useAuth } from "@/components/AuthProvider";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  return (
    <>
      <input
        type="email"
        id="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        id="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="button"
        value="Login"
        onClick={() => login(email, password)}
      />
    </>
  );
};

export default LoginForm;
