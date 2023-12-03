import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import Slider from './components/Slider/Slider';
import Cards from './components/Crads/Cards';
import Founder from './components/Founder/Founder';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Slider/>
      <Cards />
      <Founder />
      <Footer />
  
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
