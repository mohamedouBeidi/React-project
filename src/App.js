// import './App.css';
import NavBar from './Components/NavBar';
import Products from './Components/Products';
import Cart from './Components/Cart';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<Products />} /> 
      <Route path="cart" element={<Cart />} /> 
    </Routes>
    </div>
  );
}

export default App;
