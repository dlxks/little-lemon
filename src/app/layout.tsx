import type { Metadata } from "next";
import { Karla, Merriweather } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "./context/ViewMenuModalContext";
import { CartProvider } from "./context/CartContext";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-karla",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
  },
  title: "Little Lemon Restaurant",
  description: "This is the Little Lemon Restaurant Website",
  openGraph: {
    title: "Little Lemon Restaurant",
    description: "Your favorite place for delicious food.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Little Lemon Restaurant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Lemon Restaurant",
    description: "Your favorite place for delicious food.",
    images: ["/assets/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${karla.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <ModalProvider>
            <Navbar />
            <main className="flex-grow mt-15">{children}</main>
            <Footer />
          </ModalProvider>
        </CartProvider>
      </body>
    </html>
  );
}
