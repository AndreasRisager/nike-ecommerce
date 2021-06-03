import './App.css';
import { Router } from "@reach/router";
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';

function App() {
  return (
    <Router>
      <Home path="/" default />
      <Product path="product/:slug" />
      <Category path="category/:slug" />
    </Router>
  );
}

export default App;
