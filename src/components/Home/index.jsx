import React from "react";
import Images from "../../Assets/Images";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";

import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [value, setValue] = React.useState(2);

  const fetchData = [
    {
      discount: "Upto 30% off",
      quality: "fresh",
      amount: "$69.00",
      image: Images.two,
    },
    {
      discount: "Upto 10% off",
      quality: "fresh",
      amount: "$62.00",
      image: Images.one,
    },
    {
      discount: "Upto 42% off",
      quality: "fresh",
      amount: "$69.00",
      image: Images.three,
    },
    {
      discount: "Upto 10% off",
      quality: "fresh",
      amount: "$19.00",
      image: Images.four,
    },
    {
      discount: "Upto 80% off",
      quality: "fresh",
      amount: "$34.00",
      image: Images.five,
    },
    {
      discount: "Upto 15% off",
      quality: "fresh",
      amount: "$42.00",
      image: Images.six,
    },
  ];

  return (
    <div className="w-full bg-gray-600">
      <Header />
      <div>
        <div className="max-w-screen-xl mx-auto ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="   text-4xl md:text-3xl lg:text-5xl mb-4 font-extrabold text-orange-400">
                  A Different kind of grocery store
                </h1>
                <p className="mb-8 leading-relaxed text-white">
                  Order any good from our store online and we deliver them to
                  your door at a time convenient for you
                </p>
                <div className="flex justify-center">
                  <button className="inline-flex text-white bg-[#f9a826] border-0 py-2 px-6 font-bold focus:outline-none hover:bg-orange-300 rounded text-lg shadow-md">
                    Buy Now
                  </button>
                  <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded shadow-md text-lg">
                    Sign Up
                  </button>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  // src="https://dummyimage.com/720x600 "
                  src={Images.heroImage}
                />
              </div>
            </div>
          </section>
        </div>

        <div className=" bg-gradient-to-r from-[#3E1154] to-[#AD5389] w-full">
          <section className=" max-w-screen-xl mx-auto text-white body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium title-font mb-4 text-[#f9a826]">
                  Special offer of this week
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
                  100% secure delivery without contacting the courier
                </p>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] text-center flex flex-col  justify-center items-center space-y-3 px-4 py-6 rounded-lg">
                    <IoFastFoodSharp size={40} className="text-[#f9a826]" />
                    <h2 className="title-font font-medium text-3xl text-white">
                      2.7K
                    </h2>
                    <p className="leading-relaxed">Downloads</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg flex flex-col  justify-center items-center space-y-3">
                    <IoFastFoodSharp size={40} className="text-[#f9a826]" />
                    <h2 className="title-font font-medium text-3xl text-white">
                      1.3K
                    </h2>
                    <p className="leading-relaxed">Users</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg flex flex-col  justify-center items-center space-y-3">
                    <IoFastFoodSharp size={40} className="text-[#f9a826]" />
                    <h2 className="title-font font-medium text-3xl text-white">
                      74
                    </h2>
                    <p className="leading-relaxed">Files</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg flex flex-col  justify-center items-center space-y-3">
                    <IoFastFoodSharp size={40} className="text-[#f9a826]" />
                    <h2 className="title-font font-medium text-3xl text-white">
                      46
                    </h2>
                    <p className="leading-relaxed">Places</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Products */}

        <div className=" w-full">
          <section className=" max-w-screen-xl  mx-auto  text-white body-font ">
            <div className="container mx-auto px-5 py-24">
              <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
                <div>
                  <h2 className="text-4xl font-bold mb-2   ">Most Populer</h2>
                  <p>
                    Do not miss the current offer untill the end of this month
                  </p>
                </div>
                <Link to="/store">
                  <div className="hover:scale-110 transition cursor-pointer flex items-center">
                    <div>See All </div>
                    <div className="bg-[#f9a826] ml-2  p-1 rounded-full ">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-10 md:mx-0 grid-cols-1 place-content-center place-items-center gap-10 ">
                {fetchData.map((item, index) => {
                  return (
                    <div key={index}>
                      <div className="flex justify-evenly lg:justify-evenly items-center w-full bg-white text-black hover:text-white cursor-pointer hover:transition duration-500 shadow-lg hover:bg-gradient-to-r hover:from-[#AD5389] rounded-xl hover:to-[#3E1154] px-16 py-8">
                        <div className="w-[100px] h-[100px] flex justify-center items-center flex-shrink-0">
                          <img src={item.image} alt="img" />
                        </div>
                        <div>
                          <h3 className="font-extrabold uppercase">
                            {item.discount}
                          </h3>
                          <p className="">{item.quality}</p>
                          <Box
                            sx={{
                              "& > legend": { mt: 2 },
                              display: "inline",
                            }}
                          >
                            <Rating
                              name="simple-controlled"
                              value={value}
                              onChange={(event, newValue) => {
                                setValue(newValue);
                              }}
                            />
                          </Box>

                          <h3 className="font-bold text-2xl">{item.amount}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#262626] text-white text-center p-10">
          <section className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">
                Start Buying online With Discount Offer{" "}
              </h1>
              <p className="max-w-xl mt-5 mx-auto">
                Subscribe to our newsletter to receive early discount offer,
                updates and news products info.
              </p>
            </div>
            <div className="flex flex-col max-w-lg mx-auto">
              <input
                type="email"
                className="p-3 my-4 rounded-lg text-black font-bold text-lg"
                placeholder="Email"
              />
              <button className="text-white bg-[#f9a826] border-0 py-2 px-6 font-bold focus:outline-none hover:bg-orange-300 rounded text-lg shadow-md text-center">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
