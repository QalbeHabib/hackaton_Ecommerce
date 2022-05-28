import React, { useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { collection, addDoc, getData } from "firebase/firestore";
import { db } from "../../Firebase/config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Admin = () => {
  const storage = getStorage();

  const database = collection(db, "AdminData");

  const [data, setData] = useState({});
  const handleChange = (e) => {
    const newData = { [e.target.name]: e.target.value };
    setData({ ...data, ...newData });
  };

  const imgRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const docRef = addDoc(database, data)
      .then(() => {
        alert("Data added successFully");
        console.log(docRef);
        ImageUpload();
        console.log("haibib is added");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  // upload image to firebase v9 & downloading url and setting to state
  const ImageUpload = () => {
    const file = imgRef.current.files[0];

    console.log("habib is here");
    // console.log(file)
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file).then(() => {
      getDownloadURL(storageRef).then(function (url) {
        console.log(url);
        setData({ ...data, image: url });
        console.log(data);
      });
    });
    console.log("habib is there");

    console.log(data, "all the data collection");

    // Upload completed successfully, now we can get the download URL
    // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //   alert('File available at', downloadURL);
    //   setData({ ...data, image: downloadURL });
    //   console.log(data , "data updoaded with Image")
    // });

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // progress function
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     console.log(progress  + "% done");
    //     alert('Images Uploaded SuccessFully')
    //   },
    //   (error) => {
    //     // error function
    //     console.log(error);
    //   },

    //   )
  };

  return (
    <div>
      <Header />
      <section className="flex justify-center items-center my-20 ">
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
          <h3 className="pt-4 text-2xl text-center">Admin</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="firstName"
                >
                  Title
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  // value={name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  name="title"
                  placeholder="Dell 4500"
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email"
              >
                price in $
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                onChange={(e) => handleChange(e)}
                placeholder="123"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                Detail
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="About Product"
                name="detail"
                // value={detail}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="firstName"
              >
                Uploding Image
              </label>
              <input
                className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                accept=".png , .jpg "
                ref={imgRef}
                placeholder="About Product"
              />
            </div>

            <div className="mb-6 text-center">
              <button
                className="w-full mt-5 px-4 py-2 font-bold text-white bg-[#f9a826] rounded-full hover:bg-green-500 transition focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <hr className="mb-6 border-t" />
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
