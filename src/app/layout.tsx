import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/styles/globals.css";
import ClientLayout from "./ClientLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body cz-shortcut-listen="true">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
