"use client";
import { useAuth } from "@/components/AuthProvider";
import UserProfile from "@/components/UserProfile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
      <nav>
        <UserProfile />
      </nav>

      {children}
    </>
  );
}
