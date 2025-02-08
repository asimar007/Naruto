import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naruto",
  description: "Created By Asim ",
  icons: {
    icon: "/naruto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
