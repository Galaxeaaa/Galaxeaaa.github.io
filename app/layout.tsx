import type { Metadata } from "next";
import { Montserrat, Source_Sans_3, Inter } from "next/font/google";
import "./globals.css";

const main_font = Montserrat({ subsets: ["latin"] });
// const main_font = Inter({ subsets: ["latin"] });

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
        <html lang="en">
            <body className={main_font.className}>{children}</body>
        </html>
    );
}
