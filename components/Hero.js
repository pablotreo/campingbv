import Image from "next/dist/client/image";

const Hero = () => {
  return (
    <div className="container px-4">
      <div className="row flex-lg-row align-items-center g-3 px-3 py-0">

        <div className="col-md-4 d-none d-sm-block">
          <Image
            className="d-block mx-lg-auto img-fluid"
            src="/logo_sin_fondo.png"
            width={300}
            height={320}
          ></Image>
          {/* <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" 
          alt="Bootstrap Themes" width="700" height="500" loading="lazy"> */}
        </div>

        <div className="col-md-8">
          {/* <h1 className="display-3 titulo">Camping Bella Vista</h1> */}
          <h1 className="fw-normal mb-3 titulo-hero">Camping y Cabañas</h1>
          
          <p className="lead des-hero">
            Bienvenidos, nos encontramos en el <spam className="titulo-feat">Departamento de Iglesia</spam>, más
            precisamente en Bella Vista, a 175 Km de la ciudad de San Juan,
            Argentina. <br/>
            Situados al pie de la <spam className="titulo-feat">Cordillera de los Andes</spam>, con una
            temperatura media de 25ºC en epoca estival, lugar fecundo de
            agricultura, paraíso y enclave natural de extraordinaria belleza.
            Hacemos <spam className="titulo-feat">eco-turismo</spam>, privilegiando la sustentabilidad, la
            preservación y la apreciación del medio tanto natural como cultural.<br/>
            <spam className="titulo-feat">Camping Bella Vista</spam> te espera para disfrutar la paz y armonia de la
            naturaleza en un ambiente familiar.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
