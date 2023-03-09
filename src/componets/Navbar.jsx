import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import Img1 from '../assets/gravitalogo.jpg'
import CartWidget from './CartWidget';

function Navb() {
  return (
    <Navbar className='d-flex justify-content-between' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={Img1} alt="logo" width={80} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            
            
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              
              <NavDropdown.Item ><Nav.Link href="/productos"><Link className='text-dark'  to="/categorias/men's clothing">Hombre</Link></Nav.Link> </NavDropdown.Item> 
              <NavDropdown.Item ><Nav.Link href="/productos"><Link className='text-dark'  to="/categorias/jewelery">Joyeria</Link></Nav.Link> </NavDropdown.Item> 
              <NavDropdown.Item ><Nav.Link href="/productos"><Link className='text-dark' to="/categorias/electronics">Electronica</Link></Nav.Link> </NavDropdown.Item> 
              <NavDropdown.Item ><Nav.Link href="/productos"><Link className='text-dark' to="/categorias/women's clothing">Mujer</Link></Nav.Link> </NavDropdown.Item> 
              
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              <NavDropdown.Item ><Nav.Link href="/productos"><Link className='text-dark' to="/categorias/women's clothing">Sobre devoluciones</Link></Nav.Link> </NavDropdown.Item>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
  );
}

export default Navb;