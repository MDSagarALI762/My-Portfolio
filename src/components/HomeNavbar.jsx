
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { IoCall, IoMenu } from 'react-icons/io5';

function HomeNavbar() {
  return (
    <Navbar expand=""style={{background:'#F5DF4E',}} >
      <Container>
        {/* Brand Logo or Title */}
        <Navbar.Brand href="#" className="fs-1 fw-bold text-dark">
          Developer
        </Navbar.Brand>
         <Navbar.Toggle className='d-md-none d-block' aria-controls="navbarScroll"
        style={{border:'none', boxShadow:'none'}}>
          <IoMenu className="text-dark fs-1" />
        </Navbar.Toggle>
<div className="d-flex">
   <div className="d-flex align-items-center gap-3 me-3">
          <h5 className="mb-0 fs-3 fw-bold">01763131473</h5>
          <IoCall className="fs-3 text-dark" />
        </div>
        {/* Mobile Toggle */}
        <Navbar.Toggle className='d-md-block d-none' aria-controls="navbarScroll"
        style={{border:'none', boxShadow:'none'}}>
          <IoMenu className="text-dark fs-1" />
        </Navbar.Toggle>
</div>

        {/* Contact (visible on all screen sizes) */}
       

        {/* Collapsible Nav Items */}
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{height:'100vw'}} className="ms-auto my-2 my-lg-0 text-center" navbarScroll>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#home">Home</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#about">About Me</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#do">What I Do</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#resume">Resume</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#faq">FAQ</Nav.Link>
            <Nav.Link className="text-dark fs-3 fw-bold" href="#contact">Contact Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNavbar;
