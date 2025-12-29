import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

import { AuthProviderClient } from "@/providers/AuthClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MUNNA DEV",
  description:
    "I'm Munna, a passionate Full-Stack Developer skilled in JavaScript, React.js, Node.js, and MongoDB. Explore my projects, skills, and professional journey through this portfolio.",
  icons: {
    icon: "/logo.png", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <main className=" ">
       
         <AuthProviderClient>
            <Toaster richColors position="top-center" />
          {children}
        </AuthProviderClient>
       
      
      </main>
      </body>
    </html>
  );
}
