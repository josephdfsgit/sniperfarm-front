import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNIPERFARM",
  description: "Stats Page",
};

export default function StatsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
      <div className="w-[100vw] flex flex-col items-center">
        {children}
      </div>
    </>
  );
}
