"use client"
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './navbar.module.css'
import { usePathname } from 'next/navigation';

const NavbarCustom = () => {
  const pathName = usePathname();

  const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Blog',
        path: '/blog'
    },
  
];
const session = true;
const isAdmin = true;
  return (
    <Navbar expand="lg">
    <Nav.Link href={"/"} className={styles.logo}>logo</Nav.Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {links.map((link=> (
                    <Nav.Link key={link.name} className={`${styles.routes} ${pathName === link.path && styles.active}`} href={link.path}>{link.name}</Nav.Link>
        )))}{
            session?(
                <>
                 { isAdmin && <Nav.Link className={`${styles.routes} ${pathName === 'admin' && styles.active}`} href="/admin">Admin</Nav.Link>
  }
                 <button>Logout</button>
                </>
               
            ):(
              <Nav.Link className={`${styles.routes} ${pathName === 'login' && styles.active}`} href="/login">Login</Nav.Link>
            )
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default NavbarCustom