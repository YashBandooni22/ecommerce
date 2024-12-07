import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          {isLogin ? "Welcome Back!" : "Join Our Green Community"}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isLogin
            ? "Sign in to access your account and explore the eco-friendly world."
            : "Sign up and become a part of our sustainable shopping journey!"}
        </p>

        {/* Form */}
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 border border-green-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            onClick={toggleAuthMode}
            className="text-green-600 hover:underline focus:outline-none"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

        {/* Social Media Login */}
        <div className="mt-6">
          <p className="text-center text-gray-600 mb-4">Or continue with</p>
          <div className="flex justify-center space-x-4">
            {/* Facebook */}
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-500">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>

            {/* Google */}
            <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-500">
              <FontAwesomeIcon icon={faGoogle} />
            </button>

            {/* GitHub */}
            <button className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800">
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
