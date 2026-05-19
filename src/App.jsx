import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './layouts/Layout';
import AuthLayout from './layouts/AuthLayout';

import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';

import SignInPage from './AuthPages/SignInPage';
import SignUpPage from './AuthPages/SignUpPage';

import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
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

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;