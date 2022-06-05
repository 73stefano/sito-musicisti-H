import Head from "next/head";
import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <>
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>EndLess Road. </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        
      </Layout>
    </>
  );
}
