import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "../components/misc/googleAnalytics";
const nodeEnv = process.env.NODE_ENV;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {nodeEnv === "production" && (
        <>
          <GoogleAnalytics />
        </>
      )}
      <Component {...pageProps} />;
    </>
  );
}
