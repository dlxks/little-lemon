import type { Metadata } from "next";
import "./styles/globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
