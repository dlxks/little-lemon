import type { Metadata } from "next";
import { Karla, Merriweather } from "next/font/google";
import "./styles/globals.css";
import ClientLayout from "./ClientLayout";

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
    <html lang="en" className={`${karla.variable} ${merriweather.variable} `}>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
