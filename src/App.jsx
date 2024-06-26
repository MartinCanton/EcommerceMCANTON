import 'bootstrap/dist/css/bootstrap.css';
import NavbarInfor from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartProvider from './context/CartContext';
import './App.css';


function App() {
  return (
    <BrowserRouter> 
      <CartProvider>     
       <NavbarInfor />
       <Routes>
         <Route path="/" element={<ItemListContainer greeting="Bienvenido a E-Commerce MCANTON" />} />
         <Route path="/categoryId/:categoryId" element={<ItemListContainer />} />
         <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} /> 
         <Route path="/*" element={<Error404 />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/checkout" element={<Checkout />} />
       </Routes>
       <Footer />
       </CartProvider>    
    </BrowserRouter>
  );
}

export default App;


