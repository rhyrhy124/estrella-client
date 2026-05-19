import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/CustomButton';

const inputClasses =
  'mt-2 w-full rounded-xl border border-pink-300 bg-pink-50 px-4 py-3 text-sm text-pink-900 outline-none transition placeholder:text-pink-400 focus:border-pink-600 focus:bg-white';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // basic validation
    if (form.password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    // SAVE USER TO LOCALSTORAGE
    const newUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    };

    localStorage.setItem('user', JSON.stringify(newUser));

    // auto login after signup
    localStorage.setItem('isLoggedIn', 'true');

    // optional session
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        email: newUser.email,
        name: newUser.firstName,
      })
    );

    // redirect to homepage
    navigate('/home');
  };

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-pink-900 sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-pink-600">
        Create your account to access more portfolio features.
      </p>

      <form onSubmit={handleSignup} className="mt-8 space-y-5">

        {/* NAME */}
        <div className="grid gap-5 sm:grid-cols-2">

          <div>
            <label htmlFor="firstName" className="text-sm font-medium text-pink-700">
              First Name
            </label>

            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              className={inputClasses}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="text-sm font-medium text-pink-700">
              Last Name
            </label>

            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              className={inputClasses}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        {/* EMAIL */}
        <div>
          <label htmlFor="email" className="text-sm font-medium text-pink-700">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className={inputClasses}
            onChange={handleChange}
            required
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label htmlFor="password" className="text-sm font-medium text-pink-700">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Create password"
            className={inputClasses}
            onChange={handleChange}
            required
          />

          <p className="mt-2 text-xs leading-5 text-pink-500">
            Use a secure password with letters and numbers.
          </p>
        </div>

        {/* CREATE ACCOUNT */}
        <Button type="submit" className={actionButtonClassName}>
          Create Account
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

      {/* LOGIN LINK */}
      <div className="mt-8 border-t border-pink-200 pt-6 text-sm text-pink-600">
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="font-semibold text-pink-900 transition hover:text-pink-600"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;