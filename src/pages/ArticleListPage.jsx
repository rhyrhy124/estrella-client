import Button from '../components/CustomButton';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const ArticleListPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">

      {/* ================= HEADER (ADDED ONLY) ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-pink-200 bg-white/70 backdrop-blur-md shadow-sm -mx-6 -mt-6 mb-4">
        <div className="flex items-center justify-between px-6 py-3 lg:px-12">

          {/* LOGO */}
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

          {/* NAVIGATION */}
          <nav className="flex items-center gap-8 text-sm font-semibold">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
              }
            >
              HOME
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
              }
            >
              ABOUT
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            <NavLink
              to="/articles"
              className={({ isActive }) =>
                `relative group ${isActive ? "text-pink-900 font-bold" : "text-pink-700"}`
              }
            >
              ARTICLES
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-600 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

          </nav>

        </div>
      </header>

      {/* ORIGINAL CONTENT (UNCHANGED) */}
      <section className="bg-white p-6 rounded-2xl border border-pink-200">
        <h1 className="text-2xl font-bold">Featured Articles</h1>
        <p className="text-pink-600 mt-2">
          A collection of my College journey
        </p>

        <div className="mt-4">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <ArticleList articles={articles} />
    </div>
  );
};

export default ArticleListPage;