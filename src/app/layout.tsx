'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../app/styles/globals.css";
import ClientLayout from "./ClientLayout";
import { useEffect,  useState } from "react";
import Preloader from "./components/Preloader";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isloaded, setIsloaded] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(() => {
      setIsloaded(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html>
      <body cz-shortcut-listen="true">
        <ClientLayout>
          {isloaded && <Preloader />} 
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
