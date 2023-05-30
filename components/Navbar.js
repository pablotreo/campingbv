import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className={`${styles.navbara} navbar navbar-expand-lg navbar-light`}>
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <Image className="img-fluid" src="/logo_sin_fondo.png" width={65} height={65}></Image>
          </a>
        </Link>
        <h1 className="navbar-brand titulo d-none d-sm-block">Bella Vista</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
            <li className="nav-item">
              <Link href="/#alojamiento">
                <a className="nav-link">ALOJAMIENTO</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#camping">
                <a className="nav-link">CAMPING</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#motorhome">
                <a className="nav-link">MOTORHOME</a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacto">
                CONTACTO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" target="_blank" href="https://www.instagram.com/bellavistacamping/">
                <i className="fs-4 fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" target="_blank" href="https://www.facebook.com/bellavistacamping/">
                <i className="fs-4 fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
