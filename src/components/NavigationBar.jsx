import React, { useState } from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Edem from '../images/Edem.jpg'



function NavigationBar() {
  return (
    <>
    {[false].map((expand) => (
      <Navbar key={expand} expand={expand} className="bg-white mb-6 sticky z-10">
        <Container fluid>
          <Navbar.Brand><Link to={'/'}></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                
              </Offcanvas.Title>
                <div className='flex items-center content-center w-[100] pt-4'>
                  <img src={Edem}  className=' rounded-full p-2 w-[100px] h-[110px]'/>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <NavLink to={'/'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>Home</NavLink>
                <NavLink to={'/about'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>About</NavLink>
                <NavLink to={'/experience'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>Experience</NavLink>
                <NavLink to={'/portfolio'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>Portfolio</NavLink>
                <NavLink to={'/contact'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>Contact</NavLink>
                <NavLink to={'/blogs'} className=' text-lg hover:bg-blue-400 p-2 font-semibold active:shadow-sm'>Blogs</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
    </>
  )
}

export default NavigationBar