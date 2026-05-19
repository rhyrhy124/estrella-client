import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/CustomButton';
import logo from '../assets/logo.png';

const inputClasses =
  'mt-2 w-full rounded-xl border border-pink-300 bg-pink-50 px-4 py-3 text-sm text-pink-900 outline-none transition placeholder:text-pink-400 focus:border-pink-600 focus:bg-white';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

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

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (!savedUser) {
      alert('No account found. Please sign up first.');
      return;
    }

    if (
      form.email === savedUser.email &&
      form.password === savedUser.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');

      // optional: store current user session
      localStorage.setItem(
        'currentUser',
        JSON.stringify({
          email: savedUser.email,
          name: savedUser.firstName,
        })
      );

      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
      {/* LOGO */}
      <div className="flex justify-center mb-4">
        <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">
        Log In
      </h1>

      <p className="mt-3 text-sm leading-6 text-pink-600">
        Access your portfolio account using your credentials.
      </p>

      <form onSubmit={handleLogin} className="mt-8 space-y-5">

        {/* EMAIL */}
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-pink-700"
          >
            Email Address
          </label>

          <input
            id="signin-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className={inputClasses}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-pink-700"
          >
            Password
          </label>

          <input
            id="signin-password"
            name="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
            onChange={handleChange}
            required
          />

          <p className="mt-2 text-xs leading-5 text-pink-500">
            Use at least 8 characters with letters and numbers.
          </p>
        </div>

        {/* REMEMBER / FORGOT */}
        <div className="flex items-center justify-between gap-4 text-sm">

          <label className="flex items-center gap-2 text-pink-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-pink-300 accent-pink-600"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-medium text-pink-700 transition hover:text-pink-900"
          >
            Forgot Password?
          </button>

        </div>

        {/* LOGIN BUTTON */}
        <Button type="submit" className={actionButtonClassName}>
          Log In
        </Button>

        {/* SOCIAL BUTTONS */}
        <div className="grid gap-3 pt-2 sm:grid-cols-2">

          <Button type="button" className={actionButtonClassName}>
            Google
          </Button>

          <Button type="button" className={actionButtonClassName}>
            Apple
          </Button>

        </div>

      </form>

      {/* SIGN UP LINK */}
      <div className="mt-8 border-t border-pink-200 pt-6 text-sm text-pink-600">
        No account yet?{' '}
        <Link
          to="/auth/signup"
          className="font-semibold text-pink-900 transition hover:text-pink-600"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;