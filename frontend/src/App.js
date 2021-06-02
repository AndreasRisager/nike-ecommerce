import './App.css';
import { Router } from "@reach/router";
import Home from './Home';
import Product from './Product';

function App() {
  return (
    <Router>
      <Home path="/" default />
      <Product path="product/:title" />
    </Router>
  );
}

export default App;
