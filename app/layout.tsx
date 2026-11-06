import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
});
const jetBrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  
});

export const metadata: Metadata = {
  title: "Juda's Portfolio",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetBrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6FAF9]">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
