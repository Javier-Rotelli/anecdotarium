import { cookies } from "next/headers";
//TODO: refactor this, having to import cookies here makes this too coupled for my taste

import client from "@/lib/appwrite";

export const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
export const setSession = () => {
  const c = cookies();

  let hash = c.get("cookieFallback")?.value ?? "";
  client.headers["X-Fallback-Cookies"] = hash;
};
