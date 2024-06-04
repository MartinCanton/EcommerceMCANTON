import 'bootstrap/dist/css/bootstrap.css';
import NavbarInfor from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <NavbarInfor />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a E-Commerce MCANTON" />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
         <Route path="/item/:id" element={<ItemDetailContainer />} /> 
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
  );
}

export default App;


