import React from "react";
import UserForm from "./UserForm.tsx";
import UserBenefits from "./UserBenefits.tsx";

const DreamTripUserForm: React.FC = () => {
  return (
    <div className="bg-[#184664] h-[100vh] w-[85vw] mt-32 rounded-3xl">
      <div className=" text-white flex justify-between py-10 px-5">
        <div className="flex flex-col w-[65%]">
          <h1 className="md:text-[40px] sm:text-[30px] text-[18px] md:px-4 font-bold">
            Win a Dream Trip for Two! *
          </h1>
        </div>
        <img
          src={require("../assets/trivaa_logo.png")}
          alt="logo"
          className="h-[150px] w-[100px]"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <UserForm />
        <UserBenefits />
      </div>
    </div>
  );
};

export default DreamTripUserForm;
