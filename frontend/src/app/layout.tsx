import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "E-LearnMate",
  description: "Empowering E-Learning System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50">
        {children}
      </body>
    </html>
  );
}
