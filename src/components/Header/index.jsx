import React, { useState } from "react";
import Images from "../../Assets/Images";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navListColor = [
    "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 hover:text-orange-500",
  ];

  return (
    <div className=" bg-gradient-to-r from-[#3E1154] to-[#AD5389]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <a
                aria-label="Company"
                title="Company"
                className="inline-flex items-center mr-8"
              >
                <img src={Images.logo} alt="Logo" />
                <span className="ml-2 text-2xl font-extrabold tracking-wide text-gray-100 uppercase">
                  Company
                </span>
              </a>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <Link to="/product">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className={`${navListColor}`}
                  >
                    Product
                  </a>
                </li>
              </Link>
              <Link to="/store">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    className={`${navListColor}`}
                  >
                    Store
                  </a>
                </li>
              </Link>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex space-y-4 md:space-y-0">
            <Link to="/login">
              <li>
                <a
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Sign in
                </a>
              </li>
            </Link>

            <Link to="/signup">
              <li>
                <a
                  className="inline-flex items-center justify-center font-bold h-12 px-6  tracking-wide text-white transition duration-200 rounded shadow-md bg-[#f9a826] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </li>
            </Link>
            <Link to="/admin">
              <li>
                <a
                  className="inline-flex items-center justify-center font-bold h-12 px-6  tracking-wide text-white transition duration-200 rounded shadow-md bg-[#f9a826] hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Admin
                </a>
              </li>
            </Link>
          </ul>
          <div className="lg:hidden z-50">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 text-white font-bold transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiMenuAlt1 size={30} />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full ">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul>
                      <Link to="/product">
                        <li>
                          <a
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Product
                          </a>
                        </li>
                      </Link>
                      <Link to="/store">
                        <li>
                          <a
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Store
                          </a>
                        </li>
                      </Link>
                    </ul>
                    <div className="space-y-4 mt-5">
                      <div>
                        <Link to="/login">
                          <a
                            aria-label="Sign in"
                            title="Sign in"
                            className=" inline-flex items-center justify-center w-full h-12 px-6  tracking-wide text-black font-bold transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-gray-100 hover:bg-gray-200"
                          >
                            Sign in
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link to="/signup">
                          <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-[#f9a826]"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Sign up
                          </a>
                        </Link>
                      </div>
                      <div>
                        <Link to="/admin">
                          <a
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none  bg-[#f9a826]"
                            aria-label="Sign up"
                            title="Sign up"
                          >
                            Admin
                          </a>
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
