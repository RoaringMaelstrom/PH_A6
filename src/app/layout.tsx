import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

import PlannedWorkoutProvider from "../context/PlannedWorkoutContext";
import SavedWorkoutProvider from "../context/SavedWorkoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG",
  description: "Create your ideal workout, for the best version of you",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <SavedWorkoutProvider>
        <PlannedWorkoutProvider>
        <Navbar  />
        <Toaster />
        {children}
        </PlannedWorkoutProvider>
        </SavedWorkoutProvider>
        <Footer />
      </body>
    </html>
  );
}
