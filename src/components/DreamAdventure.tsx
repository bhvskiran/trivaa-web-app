import React from "react";

const DreamAdventure: React.FC = () => {
  return (
    <div className="bg-[#184664]  h-[90vh] w-[85vw] mt-32 py-5 rounded-3xl">
      <div className="flex justify-end py-4 px-5">
        <div />
        <img
          src={require("../assets/trivaa_logo.png")}
          alt="logo"
          className="h-[150px] w-[100px]"
        />
      </div>
      <div className="flex  flex-col justify-center items-center mt-[-120px] ">
        <img
          src={require("../assets/Website-10.png")}
          alt="logo"
          className="h-[300px] w-[450px]"
        />
        <h1 className="text-white text-[24px] w-[30%] text-center">
          Your entry is locked in! Stay tuned— your dream adventure might just
          be a click away!
        </h1>
        <p className="text-white text-[14px] text-center mt-20">
          Browse our Amazing products
        </p>
      </div>
    </div>
  );
};

export default DreamAdventure;
