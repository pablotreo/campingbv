import Head from "next/head";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Featurette from "../components/Featurette";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camping Bella Vista</title>
        <meta name="description" content="Turismo familiar y respetuoso con el entorno y la naturaleza." />
      </Head>
      
      <Carousel />

      <Hero />

      <Featurette />

    </>
  );
}
