import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Porviders } from "./porviders";
import Footer from "@/components/Footer";
import '@coreui/coreui/dist/css/coreui.min.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALi Portfolio",
  description: "Front-End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  bg-gray-200  dark:bg-gray-900`}>
        <Porviders>
          <NavBar />
          <main>{children}</main>
          <Footer/>
        </Porviders>
      </body>
    </html>
  );
}
