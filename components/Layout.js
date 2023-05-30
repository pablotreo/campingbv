import Nav from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return ( 
    <>
      <Nav />
      { children }
      <Footer />
    </>

   );
}
 
export default Layout;