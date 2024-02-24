import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageContainer({ children }) {
	return (
		<main className="bg-gray-50 w-full">
			<Navbar />
			<div className="mt-10">{children}</div>
			<Footer />
		</main>
	);
}
