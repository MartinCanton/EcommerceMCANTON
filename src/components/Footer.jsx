import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Mi</h5>
            <p>
              Mi nombre es Martín Cantón. Actualmente estoy cursando React JS en la carrera FullStack de CoderHouse.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>App creada con propósito del curso de ReactJs de CoderHouse. Comisión 57765</p>

          </div>
          <div className="col-md-4">
            <h5>Redes</h5>
            <ul className="list-unstyled d-flex">
              <li><a href="#" className="text-dark me-3">Facebook</a></li>
              <li><a href="#" className="text-dark me-3">Twitter</a></li>
              <li><a href="#" className="text-dark">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2024 E-Commerce Informática Mcanton. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;