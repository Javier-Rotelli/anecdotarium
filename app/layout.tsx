import UserPanel from "@/components/UserPanel";
import "./globals.css";
import styles from "./page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anecdotario",
  description: "Anecdotario",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <UserPanel />
          {children}
        </main>
      </body>
    </html>
  );
}
