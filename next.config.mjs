/** @type {import('next').NextConfig} */

import createMDX from "@next/mdx";

const nextConfig = {
	output: "export",
	images: {
		loader: "akamai",
		path: "/",
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
	// Add markdown plugins here, as desired
	extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
