import React from 'react';
import Signupimage from '../images/sign up.png';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';

const SignupComp = () => {
  return (
    <div className="signup-form">
      <div className="flex h-screen">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Left Section: Form */}
        <div className="w-2/5 flex flex-col justify-center pl-24 pr-6"> {/* Padding added */}
          <div className="w-4/5"> {/* Ensure form width is consistent */}
            <h2 className="text-4xl font-bold mb-3">Sign up</h2>
            <p className="text-gray-500 text-sm mb-3">
              Sign up to enjoy the feature of Revolutie
            </p>

            {/* Form */}
            <form>
              <div className="mb-2">
                <label className="block text-sm font-medium" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-bordered w-full mt-1 border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-2">
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full mt-1 border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input input-bordered w-full mt-1 border-gray-300 text-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your password"
                />
              </div>
              <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-1.5 text-sm">
                Sign up
              </button>
            </form>

            {/* Center the Sign In Link */}
            <p className="mt-3 text-sm text-center">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-500 underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section: Image with padding and rounded corners */}
        <div className="w-3/5 p-3 pr-3"> {/* Padding on the right side */}
          <img
            src={Signupimage}
            alt="Signup"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupComp;
