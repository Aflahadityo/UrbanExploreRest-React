import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import CardsBody from './components/Cards';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <CardsBody />
  

      <Footer />
      
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
