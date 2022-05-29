import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../Assets/Images";
import Header from "../Header/";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";

//  get data from firebase firestore

// setFireData(data);

const c = console.log;

const Store = () => {
  const [fireData, setFireData] = useState([]);

  const [cartId, setCartId] = useState([]);
  const cartCollection = collection(db, "CartData");

  useEffect(() => {
    const dataRef = collection(db, "AdminData");
    const habib = getDocs(dataRef).then((resp) => {
      setFireData(
        resp.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });

    // console.log(habib);
  }, []);

  const storeData = [
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "Shose",
      description: "this is  winther shose to wear only in winter",
      image: Images.one,
      price: "$54",
    },
    {
      title: "bags",
      description: "this is  summer bag to handle only in winter",
      image: Images.six,
      price: "$25",
    },
    {
      title: "watch",
      description: "this is  fasion watch to wear only in winter",
      image: Images.four,
      price: "$52",
    },
    {
      title: "cloths",
      description: "this is  winther Cloths to wear only in winter",
      image: Images.three,
      price: "$122",
    },
    {
      title: "Laptop",
      description: "this is  High Ended PC ",
      image: Images.six,
      price: "$22",
    },
    {
      title: "mobile",
      description: "this is  winther shose to wear only in winter",
      image: Images.five,
      price: "$52",
    },
    {
      title: "spinner",
      description: "this is  spinner to rottate for enjoyment",
      image: Images.two,
      price: "$6",
    },
  ];

  // console.log(fireData);
  const handleCart = (item) => {
    console.log("start");
    addDoc(cartCollection, {
      productId: item.id,
      price: item.price,
      title: item.title,
      img: item.image,
    })
      .then(() => {
        alert("product added into cart");
      })
      .catch((error) => {
        alert("something went wronge!");
      });
    console.log("ended");
  };

  return (
    <div>
      <Header />
      <section>
        <div className="bg-gray-700 text-white">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#f9a826]  uppercase rounded-full bg-teal-accent-400">
                  Brand new
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl  leading-none tracking-tight text-white font-extrabold sm:text-5xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="bc9273ce-29bb-4565-959b-714607d4d027"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative capitalize">Choose</span>
                </span>{" "}
                your faviourt everyday.
              </h2>
              <p className="text-base  md:text-lg">
                ALl your favourite products are here. just click on the product
                and add it to your cart.
              </p>
            </div>
            <div className="grid  text-black gap-3   md:grid-cols-3  lg:grid-cols-4 max-w-screen-2xl mx-auto">
              {fireData.map((item, id) => {
                return (
                  <div
                    className="flex shadow-lg flex-col transition duration-300 bg-white rounded-lg  hover:shadow"
                    key={id}
                  >
                    <div className="relative w-full h-48">
                      <img
                        src={item.image}
                        className="object-cover w-full h-full rounded-t"
                        alt="Plan"
                      />
                    </div>
                    <hr />
                    <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                      <div>
                        <div className="text-lg font-semibold">
                          {item.title}
                        </div>
                        <p className="text-sm ">{item.detail}</p>
                        <div className="mt-1 mb-4 mr-1 text-2xl font-bold ">
                          ${item.price}
                        </div>
                      </div>
                      <a
                        className="inline-flex items-center justify-center cursor-pointer w-full h-12 px-6 font-medium tracking-wide bg-[#f9a826] transition duration-200 rounded shadow-md text-black  focus:shadow-outline focus:outline-none hover:scale-105"
                        onClick={() => handleCart(item)}
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
