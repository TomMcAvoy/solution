import React from 'react';
import Tunnels from './Tunnels';
import Starfield from './Starfield';
import styles from '../styles/TunnelEffect.module.css';

const TunnelEffect: React.FC = () => {
  return (
    <div className={styles.tunnelContainer}>
      <Starfield />
      {[...Array(30)].map((_, i) => (
        <Tunnels key={i} />
      ))}
    </div>
  );
};

export default TunnelEffect;