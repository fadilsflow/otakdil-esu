import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Otakdil Desu",
  description: "Anime List Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
