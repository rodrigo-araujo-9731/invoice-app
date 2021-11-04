import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { IoBagHandle } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import './Navbar.css';

function Home() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container className='navbar'>
        <div>
          <Link to='/products'>
            <IoBagHandle className='appLogo' />
          </Link>
        </div>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto menu'>
            <div>
              <Link to='/list'>Invoice List</Link>
            </div>
            <div>
              <Link to='/list/create'>New invoice</Link>
            </div>
            <div>
              <Link to='/list/search'>Search</Link>
            </div>
            <div>
              <Link to='/user' className='a-profile'>
                <span>
                  <MdAccountCircle />
                </span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;
