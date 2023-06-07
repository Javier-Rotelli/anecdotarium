"use client";
import { useAuth } from "@/components/AuthProvider";
import UserProfile from "@/components/UserProfile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Link from "next/link";

export default function LoggedInLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { loading, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  return (
    <>
      <nav className="navbar bg-neutral">
        <div className="flex-1 text-neutral-content">
          <Link
            className="text-xl normal-case btn btn-ghost"
            href="/anecdotariums"
          >
            Anecdotarium
          </Link>
        </div>
        <UserProfile />
      </nav>

      {children}
    </>
  );
}
