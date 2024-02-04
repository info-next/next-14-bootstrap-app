import React from 'react';
import styles from './post.module.css';

function Postcard() {

  return (
    <div  className={styles.card}>
    <a href="#" className={styles.category}>
      <small>Politics</small>
    </a>
    <div className={styles.title}>
      <h3 className="h6"><a href="#" className="text-white">Dr. Abdullah Abdullah's Presidential Election Campaign</a></h3>
    </div>
  </div>  
  )
}

export default Postcard