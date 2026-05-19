import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Articles", to: "/articles" },
];

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // CHECK LOGIN STATUS
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // HIDE NAVBAR ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // DARK MODE
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "/auth/signin";
  };

  // NAV LINK STYLE
  const navLinkClassName = ({ isActive }) =>
    [
      "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300",
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

        {/* LOGO */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group animate-fadeSlideDown"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
          />

          <p className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Estrella
          </p>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${navLinkClassName({ isActive })} animate-fadeSlideDown`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 animate-fadeSlideDown">

          {/* IF NOT LOGGED IN */}
          {!isLoggedIn ? (
            <>
              {/* LOGIN */}
              <NavLink
                to="/auth/signin"
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                Log In
              </NavLink>

              {/* SIGN UP */}
              <NavLink
                to="/auth/signup"
                className="rounded-full border border-pink-300 bg-white px-5 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-100 dark:bg-gray-800 dark:text-pink-300 dark:hover:bg-gray-700"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              {/* LOGOUT */}
              <button
                onClick={handleLogout}
                className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full p-2 transition bg-pink-100 hover:bg-pink-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </header>
  );
};

export default NavBar;