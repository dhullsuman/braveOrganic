// import logo from './logo.svg';
import './App.css';
import AllRouter from './components/Pages/AllRouter';
import Footer from './components/Pages/Footer';
import Navbar from './components/Pages/Navbar';

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

