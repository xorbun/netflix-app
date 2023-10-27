import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search } from 'react-bootstrap-icons';
import {Bell} from 'react-bootstrap-icons';

function Mynav() {
  return (
    <Navbar collapseOnSelect expand="md" className="bg-dark">
      <Container>
        <Navbar.Brand href="#home"><Navbar.Brand href="#home">
            <img
              src="../../assets/logo.png"
              width="70"
              height="34"
              className="d-inline-block align-top"
              alt="Netflix logo"
            />
          </Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#features">TV show</Nav.Link>
            <Nav.Link className='text-white' href="#pricing">Movies</Nav.Link>
            <Nav.Link className='text-white' href="#pricing">Recently Added</Nav.Link>
            <Nav.Link className='text-white' href="#pricing">My list</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white' href="#deets"><Search/></Nav.Link>
            <Nav.Link className='text-white' eventKey={2} href="#memes">
              KIDS
            </Nav.Link>
            <Nav.Link className='text-white' eventKey={2} href="#memes"><Bell/></Nav.Link>
            <Nav.Link className='text-white' eventKey={2} href="#memes"><img
              src="../../assets/avatar.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Netflix logo"
            /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
