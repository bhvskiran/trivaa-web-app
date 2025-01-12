import React from "react";

const UserBenefits = () => {
  return (
    <div className="sm:w-[50%] px-6 my-4">
      <h1 className="text-white flex flex-start ">
        We’ve lined up other amazing prizes for YOU! Here’s what you can win:
      </h1>
      <div className="flex flex-row flex-start items-center w-[70%]">
        <img
          src={require("../assets/gift_box.png")}
          alt="logo"
          className="h-[100px] w-[120px]"
        />
        <p className="text-white mx-12">
          Our Exclusive Free Product Hampers, curated specially for you.
        </p>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p className="text-white mx-10">Gift vouchers to sweeten your day.</p>
        <img
          src={require("../assets/gift_card.png")}
          alt="logo"
          className="h-[100px] w-[120px]"
        />
      </div>
      <div className="flex flex-row flex-start items-center  w-[70%]">
        <img
          src={require("../assets/gifts.png")}
          alt="logo"
          className="h-[100px] w-[120px]"
        />
        <p className="text-white mx-10">
          Our Exclusive Free Product Hampers, curated specially for you.
        </p>
      </div>
      <div className="flex flex-row justify-end items-center">
        <p className="text-white mx-10">
          Our Exclusive Free Product Hampers, curated specially for you.
        </p>
        <img
          src={require("../assets/box.png")}
          alt="logo"
          className="h-[100px] w-[120px]"
        />
      </div>
    </div>
  );
};

export default UserBenefits;
