import type { Metadata } from "next";
import "./globals.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={styles.container}>
        {children}
      </div>
      </body>
    </html>
  );
}
