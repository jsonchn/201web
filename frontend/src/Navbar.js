import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function bar () {
  return (
    <Navbar className='navbar-light' expand="md" variant="light">
      <Container>
        <Navbar.Brand href="#home">SalStocks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="ml-auto">
              <Nav.Link as={Link} to="/">Home/Search</Nav.Link>
            </Nav.Item>
            <Nav.Link as={Link} to="/login">Log In/Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default bar;