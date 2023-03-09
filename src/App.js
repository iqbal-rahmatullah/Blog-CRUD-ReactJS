import './App.css';
import Laptop from './assets/laptop1.jpg'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <img src={Laptop} alt='Laptop' width={500}></img>
      <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      <ul>
        <li>Satu</li>
        <li>Dua</li>
        <li>Tiga</li>
        <li>Empat</li>
        <li>Lima</li>
      </ul>
    </div>
  );
}

export default App;
