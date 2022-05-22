import React from "react";
import Images from "../../Assets/Images";

const Home = () => {
  return (
    <div className="w-full bg-gray-600">
      <div>
        <div className="max-w-screen-xl mx-auto ">
          <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="   text-4xl md:text-3xl lg:text-5xl mb-4 font-bold text-[#f9a826]">
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
          <section className="  text-white body-font">
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
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg">
                   habib
                    <h2 className="title-font font-medium text-3xl text-white">
                      2.7K
                    </h2>
                    <p className="leading-relaxed">Downloads</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg">
                   habib
                    <h2 className="title-font font-medium text-3xl text-white">
                      1.3K
                    </h2>
                    <p className="leading-relaxed">Users</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg">
                   habib
                    <h2 className="title-font font-medium text-3xl text-white">
                      74
                    </h2>
                    <p className="leading-relaxed">Files</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border-2 border-[#f9a826] px-4 py-6 rounded-lg">
                    habib
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
      </div>
    </div>
  );
};

export default Home;
