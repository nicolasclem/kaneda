import React from 'react'
import logo from '../sushi-logo.png'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';


const  NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect >
        
            <Navbar.Brand className='mx-2' href="#home"> <img className='mx-2'  src={logo} width="45px" heigth="45px" alt="logo"/>
            
            Kaneda
            </Navbar.Brand>

            <Navbar.Toggle className='mx-2'/>
            <Navbar.Collapse>
            <Nav className="mx-auto">
            
                <Nav.Link  className='mx-5' href="#home">Inicio</Nav.Link>
                <NavDropdown className='mx-5' title="Menu">
                    <NavDropdown.Item   href="#">Entrada</NavDropdown.Item>
                    <NavDropdown.Item   href="#">Principal</NavDropdown.Item>
                    <NavDropdown.Item   href="#">Postre</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item   href="#">Promos</NavDropdown.Item>


                </NavDropdown>
                <Nav.Link  className='mx-5' href="#np">Contacto</Nav.Link>
              
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
    </div>
  )
}

export default NavBar