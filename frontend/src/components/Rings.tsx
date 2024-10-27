import React from 'react';
import styles from '../styles/TunnelEffect.module.css';

interface RingsProps {
  count: number;
}

const Rings: React.FC<RingsProps> = ({ count }) => {
  const colors = ['yellow', 'orange', 'red', 'violet', 'indigo', 'blue', 'green'];

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={styles.tunnelRing}
          style={{
            width: `${3 * (i + 1)}%`,
            height: `${3 * (i + 1)}%`,
            borderColor: colors[i % colors.length],
            opacity: '1',
            position: 'absolute',
            zIndex: `${10000 + i}`,
          }}
        >
          {Array.from({ length: 1000 }).map((_, j) => (
            <div
              key={j}
              className={styles.star}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Rings;