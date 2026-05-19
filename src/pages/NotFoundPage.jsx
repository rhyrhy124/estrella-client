import React from 'react';
import Button from '../components/CustomButton';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-5xl font-bold text-pink-700">404</h1>
      <p className="text-pink-500 mt-2">Page Not Found</p>

      <p className="text-sm text-pink-400 mt-2 max-w-md">
        The page you are looking for might have been removed or doesn’t exist.
      </p>

      <Button to="/" className="mt-6">
        Go Home
      </Button>
    </div>
  );
};

export default NotFoundPage;