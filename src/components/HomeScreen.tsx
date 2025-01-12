import React from "react";
import MoreInfo from "./MoreInfo.tsx";
import Navbar from "./Navbar.tsx";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-[#184664] h-[85vh] w-[85vw] rounded-bl-3xl rounded-br-3xl">
      <Navbar />
      <MoreInfo />
    </div>
  );
};

export default HomeScreen;
