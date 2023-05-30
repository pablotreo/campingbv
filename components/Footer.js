import WeatherComponent from "../components/WeatherComponent"

const Footer = () => {
  
  var currentYear = new Date().getFullYear();
  var firstYear = 1995;

  // console.log(firstYear);

  return (
    <div className="container pt-5 ">
      <div className="pt-5 my-5 border-top text-center">
        <div className="row">
          <div className="col-md-4 t-footer">
            <p className="text-center">&copy; Camping Bella Vista {firstYear} - {currentYear}</p>
          </div>
          <div className="col-md-4">
            <p className="t-footer"><spam className="">Contactos:</spam> <br />
            <i className="fa-brands fa-whatsapp fa-lg"></i> Daniel: +54 351 5411582 <br />
            <i className="fa-brands fa-whatsapp fa-lg"></i> Pablo: +54 264 4450828</p>
          </div>
          <div className="col-md-4 t-footer">
            <span className="">Clima:</span>
            <WeatherComponent />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Footer;


