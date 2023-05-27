import { Account, AppwriteException } from "appwrite";

import client from "@/lib/appwrite";

export const getUserData = async () => {
  try {
    const account = new Account(client);
    return account.get();
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const account = new Account(client);
    await account.createEmailSession(email, password);
    return account.get();
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

export const logout = async () => {
  try {
    const account = new Account(client);
    return account.deleteSession("current");
  } catch (error: unknown) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};

export const register = async (email: string, password: string) => {
  try {
    const account = new Account(client);
    return account.create("unique()", email, password);
  } catch (error) {
    const appwriteError = error as AppwriteException;
    throw new Error(appwriteError.message);
  }
};
