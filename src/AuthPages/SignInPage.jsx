import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/CustomButton';
import axios from 'axios';
import logo from '../assets/logo.png';

const inputClasses =
  'mt-2 w-full rounded-xl border border-pink-300 bg-pink-50 px-4 py-3 text-sm text-pink-900 outline-none transition placeholder:text-pink-400 focus:border-pink-600 focus:bg-white';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

/* =========================
    🧠 MANUAL ACCOUNTS (LOCAL FALLBACK)
========================= */
const localUsers = [
  {
    email: 'admin@test.com',
    password: '123456',
    role: 'admin',
    name: 'Admin User',
  },
  {
    email: 'editor@test.com',
    password: '123456',
    role: 'editor',
    name: 'Editor User',
  },
  {
    email: 'viewer@test.com',
    password: '123456',
    role: 'viewer',
    name: 'Viewer User',
  },
];

const SignInPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleLogin = async (e) => {
    e.preventDefault();

    let user = null;

    /* =========================
       1. TRY BACKEND LOGIN
    ========================= */
    try {
      const res = await axios.post(
        'http://localhost:8000/api/users/login',
        form
      );

      user = res.data;

    } catch (err) {
      console.log('Backend failed, using local fallback...');
    }

    /* =========================
       2. FALLBACK LOCAL LOGIN
    ========================= */
    if (!user || (!user.type && !user.role)) {
      user = localUsers.find(
        (u) =>
          u.email === form.email &&
          u.password === form.password
      );
    }

    /* =========================
       3. INVALID LOGIN
    ========================= */
    if (!user) {
      alert('Invalid email or password');
      return;
    }

    /* =========================
       4. BLOCK VIEWER
    ========================= */
    const userRole = user.type || user.role;
    if (userRole === 'viewer' || userRole === 'Viewer') {
      alert('Access Denied: Viewer cannot login');
      return;
    }

    /* =========================
       5. GENERATE MOCK TOKEN FOR LOCAL USERS
    ========================= */
    const token = user.token || `local-token-${Date.now()}`;

    /* =========================
       6. SAVE SESSION
    ========================= */
    localStorage.setItem('currentUser', JSON.stringify({
      email: user.email,
      firstName: user.firstName || user.name,
      type: userRole,
      token: token,
    }));

    /* =========================
       7. ROLE ROUTING
    ========================= */
    if (userRole === 'admin' || userRole === 'Admin') {
      navigate('/dashboard');
    } else if (userRole === 'editor' || userRole === 'Editor') {
      navigate('/dashboard/articles');
    }
  };

  return (
    <>
      {/* LOGO */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </div>

      <h1 className="text-3xl font-bold text-pink-900">Log In</h1>

      <p className="mt-3 text-sm text-pink-600">
        Access your portfolio account
      </p>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        <input
          name="email"
          type="email"
          placeholder="Email"
          className={inputClasses}
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className={inputClasses}
          onChange={handleChange}
          required
        />

        <Button type="submit" className={actionButtonClassName}>
          Log In
        </Button>
      </form>

      {/* LINKS */}
      <div className="mt-6 text-sm text-pink-600">
        No account?{' '}
        <Link to="/auth/signup" className="font-semibold">
          Sign Up
        </Link>

        <br />

        <Link to="/home" className="font-semibold text-pink-900">
          Go to Portfolio Home
        </Link>
      </div>
    </>
  );
};

export default SignInPage;