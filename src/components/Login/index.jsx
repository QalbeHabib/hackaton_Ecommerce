import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth();
  const [signIn, setSignIn] = useState({});
  const handleChange = (e) => {
    const newData = { [e.target.name]: e.target.value };
    setSignIn({ ...signIn, ...newData });
  };

  console.log(signIn);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, signIn.email, signIn.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Login Successfully");
        navigate("/");

        // ...
      })
      .catch((error) => {
        alert(error.message, error.code);
      });
  };

  return (
    <div>
      <div className="bg-[#262626]">
        <div className="max-w-screen-xl h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto bg-slate-50 p-5 rounded-lg">
            <h1 className="text-2xl font-bold text-center text-[#f9a826] sm:text-3xl">
              Welcome to the Company
            </h1>

            <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
              Login to get started.
            </p>

            <form
              onSubmit={handleLogin}
              className="p-8 mt-6 mb-0 space-y-4 rounded-lg "
            >
              <p className="text-lg font-medium">Sign in to your account</p>

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
                Sign in
              </button>

              <p className="text-sm text-center text-gray-500">
                No account?{"  "}
                <Link to="/signup">
                  <a className="underline">Sign up</a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
