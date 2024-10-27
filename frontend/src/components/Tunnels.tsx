import React, { useEffect } from 'react';
import Rings from './Rings';
import styles from '../styles/TunnelEffect.module.css';

const Tunnels: React.FC = () => {
  useEffect(() => {
    const tunnelLayers = document.querySelectorAll(`.${styles.tunnelLayer}`);
    tunnelLayers.forEach((layer, index) => {
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
    <div className={styles.tunnelLayer} style={{ zIndex: 10000 }}>
      <Rings count={30} />
      <div className={styles.yellowCircle} style={{ zIndex: 10040 }}></div>
    </div>
  );
};

export default Tunnels;