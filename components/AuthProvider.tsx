"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import * as appwriteAuth from "@/lib/auth";
import { Models } from "appwrite";

type AuthContextType = {
  isAuthenticated: boolean;
  user?: Models.User<Models.Preferences>;
  login: (username: string, password: string) => void;
  loading: boolean;
  logout: () => void;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<Models.User<Models.Preferences>>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const ac = await appwriteAuth.getUserData();
        setUser(ac);
      } catch (e) {}
      setIsLoading(false);
    };
    getUser();
  }, []);

  const login = async (username: string, password: string) => {
    const usr = await appwriteAuth.login(username, password);
    setUser(usr);
    router.push("/");
  };

  const logout = async () => {
    await appwriteAuth.logout();
    setUser(undefined);
    router.push("login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        loading: isLoading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
