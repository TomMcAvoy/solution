import React, { useEffect } from 'react';
import styles from '../styles/Starfield.module.css';

const Starfield: React.FC = () => {
  useEffect(() => {
    const starfield = document.querySelector(`.${styles.starfield}`);
    if (starfield) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = styles.star;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        starfield.appendChild(star);
      }
    }
  }, []);

  return <div className={styles.starfield}></div>;
};

export default Starfield;