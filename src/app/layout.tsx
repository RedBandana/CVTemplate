import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CV Template",
  description: "Using TypeScript, React, Next.js, Jest, and Node.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
