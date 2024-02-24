import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Cheng Wang";
const description = "Personal homepage of Cheng Wang.";
const url = "https://galaxeaaa.github.io/";
const image = "/images/og-image.jpg";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    type: "website",
    title: title,
    images: image,
    url: url,
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: image,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
