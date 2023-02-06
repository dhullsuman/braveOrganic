// import logo from './logo.svg';
import './App.css';
import AllRouter from './components/Pages/AllRouter';
import Footer from './components/Pages/Footer';
import Navbar from './components/Pages/Navbar';
// import Landing from './components/Pages/Landing';
// import Items from './components/Pages/Items';
import ShopAll from './components/Pages/ShopAll';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRouter/>
      <Footer/>
    </div>
  );
}

export default App;

