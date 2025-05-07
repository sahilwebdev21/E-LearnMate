import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'E-LearnMate',
  description: 'Your gateway to smart learning.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
