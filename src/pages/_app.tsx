import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "@/components/seo";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}
