import "../App.css";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import Slider from "../components/Slider/Slider";
import Founder from "../components/Founder/Founder";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "../components/Topbar";

function HomePage() {
  return (
    <>
      <Topbar />
      <NavbarComponent />
      <Slider />
      <Cards />
      <Founder />
      <Footer />
    </>
  );
}

export default HomePage;
