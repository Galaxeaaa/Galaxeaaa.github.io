import type { Metadata } from "next";
import { Montserrat, Source_Sans_3, Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const main_font = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

const serif_font = localFont({
    src: [
        {
            path: "./fonts/LibertinusSerif-Regular.woff2",
            style: "normal",
            weight: "400",
        },
        {
            path: "./fonts/LibertinusSerif-Italic.woff2",
            style: "italic",
            weight: "400",
        },
        {
            path: "./fonts/LibertinusSerif-Bold.woff2",
            style: "normal",
            weight: "900",
        },
        {
            path: "./fonts/LibertinusSerif-Semibold.woff2",
            style: "normal",
            weight: "400",
        }
    ],
    variable: '--font-libertinus-serif',
})

const chinese_font = localFont({
    src: "./fonts/ZhiMangXing-Regular.ttf",
    variable: '--font-zhi-mang-xing',
})

const title = "Cheng Wang";
const description = "Personal homepage of Cheng Wang.";
const url = "https://galaxeaaa.github.io/";
const image = "/images/og-image.jpg";

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        images: [
            {
                url: image,
                width: 800,
                height: 600,
            },
            {
                url: image,
                width: 1800,
                height: 1600,
            },
        ],
        url: url,
        type: "website",
        locale: "en_US",
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
        <html lang="en" className={`${main_font.variable} ${serif_font.variable} ${chinese_font.variable} ${main_font.className}`}>
            <body>{children}</body>
        </html>
    );
}
