import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* ================= LAYOUTS ================= */
import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';
import DashLayout from './layouts/DashLayout';

/* ================= PUBLIC PAGES ================= */
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

/* ================= AUTH PAGES ================= */
import SignInPage from './AuthPages/SignInPage';
import SignUpPage from './AuthPages/SignUpPage';

/* ================= DASHBOARD PAGES ================= */
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/DashboardReport';
import UsersPage from './pages/Users';
import DashboardArticle from './pages/DashboardArticle';

/* ================= ERROR PAGE ================= */
import NotFoundPage from './pages/NotFoundPage';

/* ================= ROUTER ================= */
const router = createBrowserRouter([
  /* ================= PUBLIC ================= */
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'about',
        element: <AboutPage />,
      },

      {
        path: 'articles',
        element: <ArticleListPage />,
      },

      {
        path: 'articles/:name',
        element: <ArticlePage />,
      },
    ],
  },

  /* ================= AUTH ================= */
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'signin',
        element: <SignInPage />,
      },

      {
        path: 'signup',
        element: <SignUpPage />,
      },
    ],
  },

  /* ================= DASHBOARD ================= */
  {
    path: '/dashboard',
    element: <DashLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },

      {
        path: 'reports',
        element: <ReportsPage />,
      },

      {
        path: 'users',
        element: <UsersPage />,
      },

      {
        path: 'articles',
        element: <DashboardArticle />,
      },
    ],
  },

  /* ================= 404 ================= */
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;