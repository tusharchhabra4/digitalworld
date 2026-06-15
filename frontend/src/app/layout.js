import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital world",
  description: "Explore the Gadgets"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
