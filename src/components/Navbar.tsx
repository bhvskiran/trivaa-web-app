import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-start h-[170px] max-w-[1240px] mx-auto px-4 text-white py-4">
      <img
        src={require("../assets/trivaa_logo.png")}
        alt="logo"
        className="h-[150px] w-[100px] max-md:order-2"
      />

      <div className="w-[30px] max-md:order-3 md:hidden"></div>
      <ul className="hidden md:flex ">
        <li className="p-4">About us</li>
        <li className="p-4">Products</li>
        <li className="p-4">Contact Us</li>
        <li className="p-4">Sign Up</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        <AiOutlineMenu size={20} />
      </div>

      {!nav && (
        <div className="fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-gray-600">
          <ul className="p-4">
            <div onClick={handleNav} className="flex justify-end">
              <AiOutlineClose size={20} />
            </div>
            <li className="p-4">About us</li>
            <li className="p-4">Products</li>
            <li className="p-4">Contact Us</li>
            <li className="p-4">Sign Up</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
