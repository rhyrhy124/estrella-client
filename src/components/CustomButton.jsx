import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, className = '' }) => {
  const base =
    'inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold transition';

  const style =
    base + ' bg-pink-600 text-white hover:bg-pink-700 ' + className;

  return to ? (
    <Link to={to} className={style}>
      {children}
    </Link>
  ) : (
    <button className={style}>{children}</button>
  );
};

export default Button;