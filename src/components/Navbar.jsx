import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white bg-">
      {/* <ul className="flex hidden">
        <li className="p-4">About us</li>
        <li className="p-4">Products</li>
        <li className="p-4">Contact Us</li>
        <li className="p-4">Sign Up</li>
      </ul> */}

      <div onClick={handleNav}>
        <AiOutlineMenu size={20} />
      </div>
      <h1>LOGO</h1>
      {!nav && (
        <div className="fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-gray-600">
          <ul className="p-4">
            <div onClick={handleNav} className="flex justify-end">
              <AiOutlineClose size={20} />
            </div>
            <li className="p-4">About Us</li>
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
