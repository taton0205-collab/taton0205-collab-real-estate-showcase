import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import WhatsAppFab from "@/components/WhatsAppFab";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expert Realty - Encontrá el hogar de tus sueños",
  description:
    "Expertos en asesoramiento inmobiliario con más de 15 años de trayectoria guiándote en cada paso.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="bg-surface text-on-surface font-sans antialiased min-h-screen pb-20 md:pb-0">
        <Header />
        <main className="md:pt-24">{children}</main>
        <WhatsAppFab />
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
