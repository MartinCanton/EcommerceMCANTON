import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LogoInfor from '../logos/LogoInfor.jpg';
import CartWidget from './CartWidget';

function NavbarInfor() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <img
            src={LogoInfor}
            width="80px"
            className="d-inline-block align-top rounded-circle ms-1"
            alt="Logo Informática"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/procesadores">
              Procesadores
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/motherboards">
              Motherboards
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/placasdevideo">
              Placas de Video
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/otros">
              Más productos...
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarInfor;
