import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/config";
import { alignProperty } from "@mui/material/styles/cssUtils";

const Signup = () => {
  const [signup, setSignUp] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newData = { [e.target.name]: e.target.value };
    setSignUp({ ...signup, ...newData });
  };

  // fireBase start
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, signup.email, signup.email)
      .then((Credential) => {
        const user = Credential.user;

        alert("Account Created Successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);

        alert(error.message, error.code);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // firebase end

  return (
    <div>
      <div className="bg-[#262626]">
        <div className="max-w-screen-xl h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto bg-slate-50 p-5 rounded-lg">
            <h1 className="text-2xl font-bold text-center text-[#f9a826] sm:text-3xl">
              Sign UP New Account
            </h1>

            <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
              Sign up to your account to get started.
            </p>

            <form
              onSubmit={handleSubmit}
              className="p-8 mt-6 mb-0 space-y-4 rounded-lg "
            >
              <p className="text-lg font-medium capitalize">
                Signup New account
              </p>
              <div>
                <label for="name" className="text-sm font-medium">
                  Name
                </label>

                <div className="relative mt-1">
                  <input
                    type="text"
                    id="name"
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter name"
                  />
                </div>
              </div>

              <div>
                <label for="email" className="text-sm font-medium">
                  Email
                </label>

                <div className="relative mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter email"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4"></span>
                </div>
              </div>

              <div>
                <label for="password" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter password"
                  />

                  <span className="absolute inset-y-0 inline-flex items-center right-4"></span>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full px-5 py-3  hover:scale-105 text-black  transition  bg-[#f9a826] font-bold hover:shadow-lg rounded-lg"
              >
                Sign Up
              </button>
            </form>
            <Link to="/login">
              <p className="text-center text-orange-800 underline">
                <a href="">Sign In</a>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
