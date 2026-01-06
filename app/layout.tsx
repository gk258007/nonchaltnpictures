import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nonchalant Pictures",
  description: "Independent Film Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/NCP_LOGO2.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
