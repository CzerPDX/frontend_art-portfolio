/*
  https://react-bootstrap.github.io/components/navbar/
*/

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MainNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Web Design</Nav.Link>
          <Nav.Link href="#features">Graphic Design</Nav.Link>
          <Nav.Link href="#pricing">Illustration</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};


export default MainNav;