import React from 'react'
import './navbar.css'
import logo from '../../img/logo/sushi-logo.png'
import {Navbar,Nav, NavDropdown, NavLink} from 'react-bootstrap';
import CartWidget from '../CartWidget';
import  { Link } from 'react-router-dom';


const  NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect >
        
       <Navbar.Brand className='mx-2'  as={Link} to="/"> <img className='mx-2'  src={logo} width="45px" heigth="45px" alt="logo" />
            
            <p className='d-inline  align-top fuente-Logo d-b'>KANEDA</p>
            </Navbar.Brand>

            <Navbar.Toggle className='mx-2'/>
            <Navbar.Collapse>
            <Nav className="mx-auto fs-4">
            
                <Nav.Link  className='mx-5 ' as={Link} to="/">Inicio</Nav.Link>
                <NavDropdown className='mx-5' title="Menu">
                <NavDropdown.Item as={Link} to="/category/entrada" > Entrada </NavDropdown.Item>
                    <NavDropdown.Item  as={Link} to="/category/principal">Principal</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/category/postre" >Postre</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/category/promo" >Promos</NavDropdown.Item>


                </NavDropdown>
                <Nav.Link  className='mx-5'as={Link} to="/reservas" > Reservas</Nav.Link>
              
            </Nav>
            </Navbar.Collapse>
            <NavLink> <CartWidget /> </NavLink>
        
    </Navbar>
    </div>
  )
}

export default NavBar