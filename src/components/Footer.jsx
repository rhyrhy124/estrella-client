import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pink-900 px-6 py-6 text-white">

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* LEFT */}
        <div>
          <h2 className="text-lg font-bold">
            Rhyza Portfolio
          </h2>

          <p className="mt-1 text-xs text-pink-200">
            Personal Portfolio using React + Tailwind CSS
          </p>
        </div>

        {/* CENTER LINKS */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">

          <NavLink
            to="/"
            className="transition hover:text-pink-300"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="transition hover:text-pink-300"
          >
            About
          </NavLink>

          <NavLink
            to="/articles"
            className="transition hover:text-pink-300"
          >
            Articles
          </NavLink>

          <NavLink
            to="/auth/signin"
            className="transition hover:text-pink-300"
          >
            Log In
          </NavLink>

          <NavLink
            to="/auth/signup"
            className="transition hover:text-pink-300"
          >
            Sign Up
          </NavLink>

        </nav>

      </div>

      {/* BOTTOM */}
      <div className="mt-4 border-t border-pink-700 pt-3 text-center">

        <p className="text-xs text-pink-200">
          © {new Date().getFullYear()} Rhyza Portfolio. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;