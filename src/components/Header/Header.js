import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const authenticatedOptions = (
  <>
    <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
    <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink to='/sign-up' className='nav-link'>Sign Up</NavLink>
    <NavLink to='/sign-in' className='nav-link'>Sign In</NavLink>
  </>
)

const alwaysOptions = (
  <>
    <NavLink to='/' className='nav-link'>Home</NavLink>
  </>
)

const authenticatedDropdown = (
  <>
    <DropdownButton id='dropdown-basic-button' title='Dropdown button'>
      <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
      <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
      <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
    </DropdownButton>
  </>
)

const Header = ({ user }) => (
  <Navbar bg='secondary' variant='dark' expand='md'>
    <Container>
      {user ? authenticatedDropdown : <div></div>}
      <Navbar.Brand>
        <Link
          to='/'
          style={{ color: '#FFF', textDecoration: 'none' }}>
                Chalkboard
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          {user && (
            <span className='navbar-text me-2'>Welcome, {user.email}</span>
          )}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default Header
