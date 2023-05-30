import Image from "next/dist/client/image";

const Featurette = () => {
  return (
    <section>
      <div className="container marketing">
        <hr className="featurette-divider" />
        <div id="alojamiento" className="py-3 row featurette g-5">
          <div className="col-md-6 mx-0">
            <h2 className="featurette-heading mb-3"><span className="titulo-feat">Alojamiento.</span>
              <span className="text-muted subtitulo featurette-heading"> Cabañas totalmente equipadas.</span>
            </h2>
            <p className="lead descripcion">
              Capacidad 2, 4 y 6 personas, cocina comedor, dos habitaciones,
              televisión satelital, ropa de cama y toallas, vajilla, cocina,
              agua caliente y fria, heladera, galeria, parrillero, cochera.
            </p>
            
          </div>
          <div className="col-md-5 shadow-lg p-4 bg-body">
            <Image
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/featurette/gildo.jpg"
              width={500}
              height={400}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></Image>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div id="camping" className="py-3 row featurette g-5">
          <div className="col-md-6 order-md-2">
            <h2 className="featurette-heading ms-4 mb-3"><span className="titulo-feat">Camping.</span>
              <span className="text-muted subtitulo"> Para disfrutar en familia.</span>
            </h2>
            <p className="ms-4 lead descripcion">
              Sectores para acampar con luz eléctrica, mesa, banquitos y asador.
              Sanitarios con duchas, inodoros, agua caliente y fria, limpieza
              dos veces al día. Quincho abierto y cerrado con mesas, bancos,
              fogón, pileta de lavar. Quincho lavadero. Pileta para chicos.
              Mucho espacio verde y abundante arboleda para disfrutar de la
              naturaleza. Iluminación en todo el camping.
            </p>
          </div>
          <div className="col-md-5 order-md-1 shadow p-4 bg-body shadow">
            <Image
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/featurette/camping.jpg"
              width={500}
              height={400}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></Image>
          </div>
        </div>

        <hr className="featurette-divider" />

        <div id="motorhome" className="py-3 row featurette g-5">
          <div className="col-md-6 mx-4">
            <h2 className="mb-3 featurette-heading"><span className="titulo-feat">Motorhome.</span>
              <span className="text-muted subtitulo"> Algo lindo para hacer.</span>
            </h2>
            
            <p className="lead descripcion">
              Sectores para motorhome con toma eléctrica, mesa, banquitos y
              asador. Sanitarios con limpieza dos veces al día. Quincho abierto
              y cerrado con mesas, bancos, fogón, pileta de lavar. Quincho
              lavadero. Pileta para chicos. Mucho espacio verde y abundante
              arboleda para disfrutar de la naturaleza. Iluminación en todo el
              camping.
            </p>
          </div>
          <div className="col-md-5 shadow-lg p-4 bg-body">
            <Image
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              src="/featurette/motorhome.png"
              width={500}
              height={400}
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></Image>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Featurette;
