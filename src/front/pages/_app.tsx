import type { AppProps } from "next/app";
import "../styles/globals.css";
import "chart.js";
import PostLinkProvider from "../contexts/postLink";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<PostLinkProvider>
			<Component {...pageProps} />
		</PostLinkProvider>
	);
}
