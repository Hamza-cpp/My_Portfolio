import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { Nunito_Sans } from "next/font/google";
import Head from "next/head";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nuni",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${nunito_sans.variable} font-nuni bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
