import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Quicksand } from "next/font/google";
import { TProvider } from "@/providers/toast-provider";
import { Suspense } from "react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FEP Dogs App",
  description:
    "Explora cientos de fotos de perros por razas y categorías, descubre imágenes aleatorias y guarda tus favoritas."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} flex min-h-screen flex-col text-foreground antialiased`}>
        <Providers>
          <Suspense
            fallback={
              <nav className="bg-lime-800" aria-hidden="true">
                <div className="container flex min-h-20 items-center justify-between ">
                  <span className="px-3 py-6 text-lime-100">FEP Dogs App</span>
                  <div className="mr-2 h-10 w-10 rounded-full bg-lime-700" />
                </div>
              </nav>
            }
          >
            <Navbar />
          </Suspense>
          <TProvider />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
