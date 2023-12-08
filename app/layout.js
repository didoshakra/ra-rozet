// import Header from "@/components/Header"
import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";
import Header from "../components/header/Header";
import HeaderTape from "../components/header/HeaderTape";
import Footer from "../components/header/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Прод-пром товари",
  description: "Продуктові і промислові товари",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      {/* suppressHydrationWarning={true}//https://www.slingacademy.com/article/next-js-warning-extra-attributes-from-the-server/ */}
      <body
        suppressHydrationWarning={true}
        className={`inter.className bg-bodyBg`}
      >
        <Providers>
          <HeaderTape />
          <Header />
          {/* <main className="mx-auto max-h-1.5 min-h-screen max-w-7xl border-3 border-red-600"> */}
          {/* <main className=" mx-auto my-auto  border-3 border-red-600"> */}
          <main className="max-w-7xl mx-auto container my-auto p-0">
            {children}
          </main>
          {/* <main className="mx-auto min-h-screen max-w-7xl ">{children}</main> */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
