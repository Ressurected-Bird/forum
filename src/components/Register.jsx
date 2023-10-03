import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center  my-12">
        {/* Row */}
        <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-row items-center justify-center ">
          <div className="w-full lg:w-1/2  hidden lg:block">
            <img
              src="assets/register_img.svg"
              className="object-contain"
              alt=""
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none flex flex-col items-center justify-center ">
            <Link to={"/"} className="flex items-center">
              <img src="assets/logo.svg" className="h-10" alt="Logo" />
            </Link>
            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="c_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="c_password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm">
                  By continuing you indicate that you agree to{" "}
                  <span className="text_gradient">ResurrectedBird’s</span>{" "}
                  <a href="#" className="text-blue-500">
                    Terms of Service{" "}
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-500">
                    {" "}
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="mb-6 text-center">
                <button
                  className="background_gradient w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={"/login"}
                >
                  Already have an account? Login!
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
