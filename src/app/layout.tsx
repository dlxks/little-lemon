import type { Metadata } from "next";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Karla, Markazi_Text } from "next/font/google";

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-karla",
});

const markazi = Markazi_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-markazi",
});

export const metadata: Metadata = {
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${markazi.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
