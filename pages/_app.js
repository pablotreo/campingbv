import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        
        <meta
          name="keywords"
          content="cabañas, alojamiento, camping, motorhome, bella vista, iglesia, san juan"
        />
        <link rel="icon" href="/favicon.png" />
        
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
