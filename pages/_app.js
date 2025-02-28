import "../styles/tailwind.css";
import "../styles/slick.css";
import Head from 'next/head';
import { AppProps } from 'next/app';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Sito della Endless Road Band" />
        <meta name="keywords" content="Keywords" />
        <title>Endless Road Band</title>
        <meta property="twitter:image" content="public/assets/foto4.jpeg"></meta>
        <meta property="og:image" content="public/assets/foto4.jpeg"></meta>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/assets/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/assets/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}