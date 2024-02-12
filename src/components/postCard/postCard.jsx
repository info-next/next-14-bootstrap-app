import React from 'react';
import styles from './post.module.css';
import Link from 'next/link';

function Postcard({post}) {

  return (
       <div  className={styles.card} >
    <a href="#" className={styles.category}>
      <small>Politics</small>
    </a>
    <div className={styles.title}>
      <h3 className="h6"><Link  href={`/blog/${post.id}`} className="text-white">{post.title}</Link></h3>
    </div>
  </div>  
   
  )
}

export default Postcard