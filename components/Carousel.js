import Image from "next/dist/client/image";
import portada09 from '../public/portada/portada09.jpg';

const Carousel = () => {
  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      <div className="carousel-item active">
          <img
            src="../portada/portada12.jpg"
            className="d-block w-100"
            alt=""
          ></img>
          <div className="carousel-caption d-none d-md-block subtitulo">
            <h1>Un lugar acogedor para nuestros visitantes.</h1>
            {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../portada/portada10.jpg"
            className="d-block w-100"
            alt=""
          ></img>
          <div className="carousel-caption d-none d-md-block subtitulo">
            <h1>Temperaturas de 25ºC en epoca estival.</h1>
            {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="../portada/portada11.jpg"
            className="d-block w-100"
            alt=""
          ></img>
          <div className="carousel-caption d-none d-md-block subtitulo">
            <h1>Paz y naturaleza en un ambiente familiar.</h1>
            {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </div>
        <div className="carousel-item">
          <Image 
            layout="responsive"
            className="d-block w-100"
            src={portada09}
            alt=""
          ></Image>
          <div className="carousel-caption d-none d-md-block subtitulo">
            <h1 className="fw-normal">
            Privilegiamos la sustentabilidad, la preservación y la apreciación del medio.
            </h1>
            {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </div>
  
        <div className="carousel-item">
          <img
            src="../portada/portada13.jpg"
            className="d-block w-100"
            alt=""
          ></img>
          <div className="carousel-caption d-none d-md-block subtitulo">
            <h1>Enclave natural de extraordinaria belleza.</h1>
            {/* <p>
                Some representative placeholder content for the first slide.
              </p> */}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
