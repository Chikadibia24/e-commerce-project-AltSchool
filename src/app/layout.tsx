import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/nav/header";
import Footer from "./components/footer/footer";
import { CountProvider } from "@/context";
import NavbarLight from "./components/nav/navbar-light";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage",
  description: "Bandage E-Commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CountProvider>
        <body className={inter.className}>
          <Header />
          <NavbarLight />
          {children}

          <Footer />
        </body>
      </CountProvider>
    </html>
  );
}
