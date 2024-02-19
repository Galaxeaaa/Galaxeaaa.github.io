import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageContainer({ children, ...customMeta }) {
	const meta = {
		...customMeta,
	};

	return (
		<div>
			<Head>
				{/* HTML Meta Tags */}
				<title>{meta.title}</title>
				<meta name="description" content={meta.description} />

				{/* Facebook Meta Tags */}
				<meta property="og:url" content={meta.url} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:image" content={meta.image} />

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content={meta.url} />
				<meta property="twitter:url" content={meta.url} />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
			</Head>
			<main className="bg-gray-50 w-full">
				<Navbar />
				<div className="mt-10">{children}</div>
				<Footer />
			</main>
		</div>
	);
}
