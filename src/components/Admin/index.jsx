import React, { useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { collection, addDoc , getData } from "firebase/firestore";
import { db } from "../../Firebase/config";

const Admin = () => {
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
        alert("Document written with ID");
        console.log(docRef);
        e.target.value = "";
      })
      .catch((e) => {
        alert(e.message);
      });

    // const file = imgRef.current.files[0];
    // const storageRef = collection(db, "AdminData")
    //   .doc(data.email)
    //   .collection("Images")
    //   .doc(file.name);
    // const task = storageRef.put(file);
    // task.on(
    //   "state_changed",
    //   function progress(snapshot) {
    //     var percentage =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     console.log("Upload is " + percentage + "% done");
    //   },
    //   function error(err) {
    //     console.log(err);
    //   },
    //   function complete() {
    //     storageRef
    //       .get()
    //       .then(function (doc) {
    //         if (doc.exists) {
    //           console.log("Document data:", doc.data());
    //           const newData = {
    //             ...data,
    //             image: doc.data().image,
    //           };
    //           addDoc(dataBaseRef, newData);
    //           alert("Account Created Successfully");
    //           window.location.reload();
    //         } else {
    //           // doc.data() will be undefined in this case
    //           console.log("No such document!");
    //         }
    //       })
    //       .catch(function (error) {
    //         console.log("Error getting document:", error);
    //       });
    //   }
    // );
  };

  {
  }

  console.log(data);
  return (
    <div>
      <Header />
      <section className="flex justify-center items-center mt-10 ">
        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border border-red mx-5">
          <h3 className="pt-4 text-2xl text-center">Admin</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
            <div className="mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  for="firstName"
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
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  Size
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="15 Inch"
                  name="size"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                price
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="price"
                onChange={(e) => handleChange(e)}
                placeholder="769 $"
              />
            </div>
            <div className="mb-4 md:mr-2 md:mb-0">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                for="firstName"
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
                for="firstName"
              >
                Uploding Image
              </label>
              <input
                className="w-full px-3  mt-5 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="file"
                name="image"
                ref={imgRef}
                placeholder="About Product"
              />
              <button className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                Uplode
              </button>
            </div>

            <div className="mb-6 text-center">
              <button
                className="w-full mt-5 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
