import React from "react";
import "daisyui";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4">
      <div className="text-6xl md:text-9xl font-extrabold">404</div>
      <div className="text-2xl md:text-3xl font-bold mb-4 text-center">Page Not Found</div>
      <p className="text-base md:text-lg mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been removed, or the URL might be incorrect.
      </p>
      <a href="/" className="btn btn-primary w-full sm:w-auto">Go Back Home</a>
    </div>
  );
};

export default NotFoundPage;
