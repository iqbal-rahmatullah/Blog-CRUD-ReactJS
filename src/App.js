import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Allcard from './components/Allcard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <h1>Hello World</h1>
      <img src={Laptop} alt='Laptop' width={500}></img>
      <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      <ul>
        <li>Satu</li>
        <li>Dua</li>
        <li>Tiga</li>
        <li>Empat</li>
        <li>Lima</li>
      </ul> */}
      <Navbar />
      <Hero />
      <Allcard />
      <Footer text="Built By SMA FG"/>
    </div>
  );
}

export default App;
