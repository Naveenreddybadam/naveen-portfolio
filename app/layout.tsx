
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badam Naveen Reddy | Developer Portfolio",
  description:
    "Portfolio of Badam Naveen Reddy, an aspiring Full Stack Developer interested in Java, Spring Boot, React and AI.",
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
