import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from '../components/OAuth';
export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: null,
    password:null,
  })
  const { email, password } = formData;
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  return (
    <section>
      <h1 className="text-3xl font-bold text-center mt-6">Sign In</h1>

      <div className="flex justify-center flex-wrap items-center px-6 mx-auto py-12 max-w-6xl">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form action="">
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={onChange}
              className="w-full mb-6 border-gray-300 px-4 py-2  text-gray-700 bg-white text-xl ease-in-out rounded transition"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={onChange}
                className="w-full border-gray-300 px-4 py-2  text-gray-700 bg-white text-xl ease-in-out rounded transition"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute right-3 top-3"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute right-3 top-4"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="text-sm sm:text-lg flex justify-between whitespace-nowrap">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 ml-1 transition duration-200 ease-in-out"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Forgot-password?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="uppercase transition duration-150 hover:shadow-lg ease-in-out active:bg-blue-800 text-sm bg-blue-600 hover:bg-blue-700 w-full rounded px-7 text-white py-3 shadow-md "
            >
              SIGN IN
            </button>
            <div className="flex before:border-t before:border-gray-300 before:flex-1  after:border-t after:border-gray-300 after:flex-1 my-4 items-center">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </section>
  );
}
