import React from 'react';
import '../styles/Button.css';

export default function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}
