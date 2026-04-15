import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/CustomButton';
import logo from '../assets/logo.png';

const HomePage = () => (
  <div className="flex w-full flex-col gap-6">

    {/* ✅ ENHANCED HEADER / NAVBAR */}
    <header className="sticky top-0 z-50 w-full border-b border-pink-200 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-6 py-3 lg:px-12">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-full border-2 border-pink-300 shadow-sm"
          />
          <span className="text-lg font-extrabold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
            Rhyza Portfolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-semibold">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative group ${
                isActive ? "text-pink-900 font-bold" : "text-pink-700"
              }`
            }
          >
            HOME
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative group ${
                isActive ? "text-pink-900 font-bold" : "text-pink-700"
              }`
            }
          >
            ABOUT
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              `relative group ${
                isActive ? "text-pink-900 font-bold" : "text-pink-700"
              }`
            }
          >
            ARTICLES
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

        </nav>

      </div>
    </header>

    {/* Hero Section */}
    <section className="border-y-2 border-pink-600 bg-pink-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
            Hero Section
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-pink-900 sm:text-4xl">
            Hi, I'm Rhyza Ann Hernandez Estrella
          </h1>
          <h2 className="mt-2 max-w-xl text-2xl font-semibold text-pink-800 sm:text-3xl">
            Aspiring Mobile & Web Developer
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-7 text-pink-600 sm:text-base">
            Student at <strong>National University Manila</strong>. I focus on creating clean, user-friendly mobile and web applications with modern technologies.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-6 text-pink-600 sm:text-base">
            I enjoy working on innovative projects, exploring blockchain, and developing apps that solve real-world problems. Currently, I’m enhancing my skills in React, Tailwind CSS, and mobile development.
          </p>
          <div className="mt-6">
            <Button to="/about" variant="primary">Learn More</Button>
          </div>
        </div>

        {/* Logo/Image Section */}
        <div className="rounded-3xl border-2 border-dashed border-pink-300 bg-pink-100 p-6 flex items-center justify-center">
          <img
            src={logo}
            alt="Rhyza Logo"
            className="h-40 w-40 rounded-full object-cover border-4 border-pink-300 shadow-md"
          />
        </div>
      </div>
    </section>

    {/* KPI Section */}
    <section className="border-y-2 border-pink-600 bg-pink-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
          KPI Section
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-pink-900">
          Quick overview blocks
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-5">
          <p className="text-2xl font-bold text-pink-900">12</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
            Projects
          </p>
        </div>
        <div className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-5">
          <p className="text-2xl font-bold text-pink-900">08</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
            Sections
          </p>
        </div>
        <div className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-5">
          <p className="text-2xl font-bold text-pink-900">24</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
            Screens
          </p>
        </div>
        <div className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-5">
          <p className="text-2xl font-bold text-pink-900">04</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-pink-500">
            Layouts
          </p>
        </div>
      </div>
    </section>

    {/* Feature Cards Section */}
    <section className="border-y-2 border-pink-600 bg-pink-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-500">
          Feature Cards
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-pink-900">Simple wireframe cards</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">

        <article className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-4">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-pink-200">
            <div className="h-12 w-12 border-2 border-pink-300 bg-pink-100" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-pink-900">Feature Card One</h3>
          <p className="mt-3 text-sm leading-6 text-pink-600">
            A clean placeholder for title, short text, and action.
          </p>
          <Button className="mt-4" variant="primary">View More</Button>
        </article>

        <article className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-4">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-pink-200">
            <div className="h-12 w-12 border-2 border-pink-300 bg-pink-100" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-pink-900">Feature Card Two</h3>
          <p className="mt-3 text-sm leading-6 text-pink-600">
            Balanced spacing keeps the card layout easy to scan.
          </p>
          <Button className="mt-4" variant="primary">View More</Button>
        </article>

        <article className="rounded-3xl border-2 border-pink-900 bg-pink-100 p-4">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-pink-200">
            <div className="h-12 w-12 border-2 border-pink-300 bg-pink-100" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-pink-900">Feature Card Three</h3>
          <p className="mt-3 text-sm leading-6 text-pink-600">
            Repeated blocks give the page a consistent wireframe rhythm.
          </p>
          <Button className="mt-4" variant="primary">View More</Button>
        </article>

      </div>
    </section>

  </div>
);

export default HomePage;