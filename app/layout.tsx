import type { Metadata } from "next";
import { Sour_Gummy } from "next/font/google";
import "./globals.css";

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nayara",
  description: "I miss you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourGummy.variable}`}>{children}</body>
    </html>
  );
}
