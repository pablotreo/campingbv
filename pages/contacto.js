import Head from "next/head";
import Image from "next/dist/client/image";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Camping Bella Vista</title>
        <meta name="description" content="Turismo familiar y respetuoso con el entorno y la naturaleza." />
      </Head>
      <div className="container" style={{marginTop:80}}>
        <div className="row">
          <div className="col-sm-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6880.144432028261!2d-69.24492198389892!3d-30.43405467560455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968492fab9024481%3A0x4f4b9ae8b3336de9!2sCamping%20Bella%20Vista!5e0!3m2!1ses-419!2sar!4v1685460394983!5m2!1ses-419!2sar" 
            width="600" height="450" style={{border:0}}></iframe>
          {/* <Image
              className="img-fluid mx-auto"
              src="/mapaBellaVista.jpg"
              width={800}
              height={1000}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></Image> */}
          </div>
          <div className="col-sm-6">
            <p className="contacto"><spam className="">Contactos:</spam> <br />
            <i className="fa-brands fa-whatsapp fa-lg"></i> Daniel: +54 351 5411582 <br />
            <i className="fa-brands fa-whatsapp fa-lg"></i> Pablo: +54 264 4450828<br />
            <i className="fa-regular fa-envelope"></i> Email: campingbv@gmail.com</p>
            
          </div>
        </div>
      </div>
    </>
  );
}