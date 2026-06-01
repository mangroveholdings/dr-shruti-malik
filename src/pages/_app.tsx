import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "@/components/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
}
