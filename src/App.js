import logo from './logo.svg';
import './App.css';
import Anime from './components/Anime';
import Books from './components/Books';
import Gallery from './components/Gallery';
import Products from './components/Product';
import Students from './components/Student';
function App() {
  return (
    <div className="App">
      <Anime />
      <Gallery />
      <Books />
      <Products />
      <Students/>
    </div>
  );
}

export default App;
