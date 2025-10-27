import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NUX BUY",
  description: "YOUR BEST ECOMMERCE WEBSITE IN THE ONEPIECE WORD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
        <body className="font-body text-text-primary">
          <div className="flex flex-col layout">
            <Header />
            <div className="w-full grow p-5">{children}</div>
            <Footer />
            <Toaster position="top-center" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
