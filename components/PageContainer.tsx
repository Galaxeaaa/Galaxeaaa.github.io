import React from "react";
import Head from "next/script";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageContainer({ children, ...customMeta }) {
	const meta = {
		...customMeta,
	};

	return (
		<div>
			<Head>
				<title>{meta.title}</title>
			</Head>
			<main className="bg-gray-50 w-full">
				<Navbar />
				<div className="mt-10">{children}</div>
				<Footer />
			</main>
		</div>
	);
}
