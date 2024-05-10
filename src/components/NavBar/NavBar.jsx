import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';
import favicon from './assets/favicon.ico'



export const NavBar = () => {
    return (
      <nav className="navbar">
        <img src={favicon} alt="Favicon" className="favicon" />
        <div className="title">E-Commerce Mcanton</div>
        <div className="buttons">
          <a href="#inicio" className="navbar-button">Inicio</a>
          <a href="#productos" className="navbar-button">Productos</a>
          <a href="#carrito" className="navbar-button">Carrito</a>
        </div>
        <CartWidget />
      </nav>
    );
  };