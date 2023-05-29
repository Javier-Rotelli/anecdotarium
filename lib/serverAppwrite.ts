import { cookies } from "next/headers";
//TODO: refactor this, having to import cookies here makes this too coupled for my taste

import client from "@/lib/appwrite";

export const setSession = () => {
  const c = cookies();

  let hash = c.get("cookieFallback")?.value ?? "";
  client.headers["X-Fallback-Cookies"] = hash;
};
