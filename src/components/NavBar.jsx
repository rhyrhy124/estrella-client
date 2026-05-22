import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  /* ================= NAV LINKS ================= */
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Articles", to: "/articles" },
  ];

  /* ================= SCROLL HIDE NAV ================= */
  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ================= DARK MODE ================= */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  /* ================= LOGOUT ================= */
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    window.location.href = "/auth/signin";
  };

  /* ================= STYLE ================= */
  const navLinkClassName = ({ isActive }) =>
    [
      "px-4 py-2 rounded-full text-sm font-semibold transition",
      isActive
        ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
        : "text-gray-600 hover:bg-pink-100 hover:text-pink-600 dark:text-gray-300 dark:hover:bg-gray-800",
    ].join(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm border-b border-pink-100 dark:border-gray-800`}
    >

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">

        {/* ================= LEFT: LOGO ================= */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md transition group-hover:scale-110"
          />

          <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Estrella
          </span>
        </NavLink>

        {/* ================= CENTER: NAV LINKS ================= */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}

          {/* ADMIN LINK (optional but useful) */}
          <NavLink
            to="/dashboard"
            className="px-4 py-2 rounded-full text-sm font-semibold text-purple-600 hover:bg-purple-100"
          >
            Admin
          </NavLink>
        </nav>

        {/* ================= RIGHT: AUTH + SETTINGS ================= */}
        <div className="flex items-center gap-3">

          {/* AUTH BUTTONS */}
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/auth/signin"
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md hover:scale-105"
              >
                Log In
              </NavLink>

              <NavLink
                to="/auth/signup"
                className="rounded-full border border-pink-300 px-5 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-100 dark:text-pink-300"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              Logout
            </button>
          )}

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 bg-pink-100 hover:bg-pink-200 dark:bg-gray-800"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

      </div>
    </header>
  );
};

export default NavBar;