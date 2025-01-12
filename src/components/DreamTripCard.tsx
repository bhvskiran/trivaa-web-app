import React from "react";

const DreamTripCard: React.FC = () => {
  return (
    <div className="bg-[#184664] h-[90vh] w-[85vw] mt-32 rounded-3xl">
      <div className=" text-white flex justify-between py-10 px-5">
        <div className="flex flex-col w-[65%]">
          <h1 className="md:text-[40px] sm:text-[30px] text-[18px] md:px-4 font-bold">
            Win a Dream Trip for Two! *
          </h1>
          <p className="md:text-[30px] sm:text-[35px] text-[20px] md:text-center text-white md:px-4 md:py-5 py-5">
            Exciting news! One lucky users will win an amazing trip package.
            Here's your chance to participate and make it happen!
          </p>
        </div>
        <img
          src={require("../assets/trivaa_logo.png")}
          alt="logo"
          className="h-[150px] w-[100px]"
        />
      </div>
      <div className="flex flex-row justify-between px-10">
        <div className="text-white flex flex-col max-sm:w-full">
          <h1 className="sm:text-[18px] text-white">Follow these steps :</h1>
          <ul className="sm:text-[40px] list-disc ">
            <li className="text-[16px] px-3 py-1">
              Check the inside of your product packaging for a Unique Code.
            </li>
            <li className="text-[16px] px-3 py-1">
              Fill in the form with your details and the unique code found on
              the inside of your pack.
            </li>
            <li className="text-[16px] px-3 py-1">
              Hit submit and stay tuned—we might just send you packing (on a
              fabulous trip)!
            </li>
          </ul>

          <button className="bg-blue-50 text-blue-500 px-12 py-2 rounded-full  mt-10 md:self-end">
            Lets Go!
          </button>

          <ul className="md:text-[10px] sm:text-[30px] list-disc mt-10 text-white">
            <li> Each unique code can only be used once.</li>
            <li> Winners will be announced on [date].</li>
            <li> Terms and conditions apply.</li>
          </ul>
        </div>
        <img
          src={require("../assets/Website-4.png")}
          alt="trip"
          className="h-[320px] w-[450px] self-end"
        />
      </div>
    </div>
  );
};

export default DreamTripCard;
