import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to = '#', text, children, variant = 'primary', className = '' }) => {
  // Decide colors based on variant
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold transition-all duration-300';
  const variants = {
    primary:
      'bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg',
    secondary:
      'bg-pink-100 text-pink-900 border-2 border-pink-600 hover:bg-pink-200 hover:shadow-md',
  };

  const combinedStyles = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  // If children exist, use them, else use text prop
  return to.startsWith('/') ? (
    <Link to={to} className={combinedStyles}>
      {children || text}
    </Link>
  ) : (
    <a href={to} className={combinedStyles}>
      {children || text}
    </a>
  );
};

export default Button;