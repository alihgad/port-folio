import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/global/NavBar";
import { Porviders } from "./porviders";
import Footer from "@/components/global/Footer";
import "@coreui/coreui/dist/css/coreui.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALi Portfolio",
  description: "Front-End Developer",
  keywords: ["Front-End Developer", "Ali Portfolio", "react developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}   bg-gray-200  dark:bg-[#121212]`}>
        <Porviders>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Porviders>
      </body>
    </html>
  );
}
