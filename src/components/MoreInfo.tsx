import React from "react";

const MoreInfo: React.FC = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-150px] w-full h-screen mx-auto text-left flex flex-col justify-center p-4">
        <p1 className="md:text-4xl sm:text-3xl text-xl font-bold p-4">
          Crafting Nature's Best for Your Health
        </p1>
        <h1 className="font-bold p-4 md:text-7xl small:text-6xl text-4xl md:py-6">
          Pure,
          <br />
          Wholesome,
          <br />
          Authentic.
        </h1>
        <button className="bg-blue-200 text-blue-700 w-[160px] rounded-full h-[30px]">
          {" "}
          Join Us
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;
