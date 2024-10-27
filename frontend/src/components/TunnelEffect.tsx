
import React, { useEffect } from 'react';
import styles from '../styles/TunnelEffect.module.css';

const TunnelEffect: React.FC = () => {
  useEffect(() => {
    const tunnelLayers = document.querySelectorAll(`.${styles.tunnelLayer}`);
    tunnelLayers.forEach((layer, index) => {
      const colors = ['yellow', 'orange', 'red', 'violet', 'indigo', 'blue', 'green'];

      // Add all rings at once with stars
      for (let i = 0; i < 30; i++) {
        const ring = document.createElement('div');
        ring.className = styles.tunnelRing;
        ring.style.width = `${3 * (i + 1)}%`;
        ring.style.height = `${3 * (i + 1)}%`;
        ring.style.borderColor = colors[i % colors.length];
        ring.style.opacity = '1';
        ring.style.position = 'absolute';
        ring.style.zIndex = `${111010 + i}`; // Ensure rings have a higher z-index
        layer.appendChild(ring);

        // Add stars to each ring
        for (let j = 0; j < 1000; j++) {
          const star = document.createElement('div');
          star.className = styles.star;
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Random color from the array
          ring.appendChild(star);
        }

        console.log(`Ring ${i + 1} added with stars`);
      }

      // Add a yellow circle with a diameter of 2 cm
      const yellowCircle = document.createElement('div');
      yellowCircle.className = styles.yellowCircle;
      yellowCircle.style.zIndex = '111040'; // Ensure the yellow circle is above other elements
      layer.appendChild(yellowCircle);

      const tunnelRings = layer.querySelectorAll(`.${styles.tunnelRing}`);
      let currentTunnelIndex = tunnelRings.length - 1;

      function updateTunnelRings() {
        tunnelRings[currentTunnelIndex].classList.remove(styles.active);
        currentTunnelIndex = (currentTunnelIndex - 1 + tunnelRings.length) % tunnelRings.length;
        tunnelRings[currentTunnelIndex].classList.add(styles.active);
      }

      const interval = setInterval(updateTunnelRings, 1000 + index * 200); // Out of sync intervals

      return () => {
        clearInterval(interval);
      };
    });
  }, []);

  return (
    <div className={styles.tunnelContainer}>
      {[...Array(30)].map((_, i) => (
        <div key={i} className={styles.tunnelLayer}>
          <div className={styles.tunnelRing}></div>
        </div>
      ))}
    </div>
  );
};

export default TunnelEffect;