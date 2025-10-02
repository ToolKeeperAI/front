import React from 'react';
import styles from '../styles/components/Button.module.css';

export default function Button({ children, onClick, disabled, style }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
