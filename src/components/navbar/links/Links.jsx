import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/navLink';

const Links = () => {
const [open, setOpen] = useState(false);
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
    <div className={styles.container}>
   <div className={styles.links}>
        {links.map((link=> (
            <NavLink item={link} key={link.name} />
        )))}{
            session?(
                <>
                 { isAdmin && <NavLink item={{name: 'Admin', path: '/admin'}} />  }
                 <button>Logout</button>
                </>
               
            ):(
                <NavLink item={{name: 'Login', path: '/login'}} />
            )
        }
    </div>
    <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
    {open && (
        <div className={styles.mobileLinks}>
            {links.map((link=> (
                <NavLink item={link} key={link.name} />
            )))}
        </div>
    )

    }
    </div>
 
  )
}

export default Links