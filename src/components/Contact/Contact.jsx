import React from "react";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsPinterest,
  BsTwitter,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-gray-600 text-white h-12 flex justify-center items-center gap-20 my-10">
      <div>
        <h3 className="text-sm">BE IN TOUCH WITH US:</h3>
      </div>
      <form className="bg-white rounded-md h-8">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your e-mail"
          className="outline-none bg-transparent rounded-l-md text-black px-1"
          required
        />
        <button
          type="submit"
          className="bg-gray-800 rounded-r-md px-1 text-xs h-full"
        >
          JOIN US
        </button>
      </form>
      <div className="flex gap-3">
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsGoogle />
        <BsPinterest />
      </div>
    </div>
  );
};

export default Contact;
