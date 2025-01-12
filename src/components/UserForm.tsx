import { Input, Select, Space } from "antd";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const cities = [
  { value: "Vishakapatnam", label: "Vishakapatnam" },
  { value: "Tirupati", label: "Tirupati" },
  { value: "Vijayawada", label: "Vijayawada" },
  { value: "Kakinada", label: "Kakinada" },
];

const UserForm: React.FC = () => {
  return (
    <div className="sm:w-[50%] px-8 pb-6 ">
      <label className="text-white">Name*</label>
      <Input
        type="text"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-white">Email Id*</label>
      <Input
        type="text"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="text-white">Mobile No.*</label>
      <Input
        type="number"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="text-white mb-2 block">City*</label>
      <Select
        className="w-full h-[40px] mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
        placeholder="Select City"
        dropdownStyle={{ backgroundColor: "#f7f7f7" }}
        options={cities}
      />
      <label className="text-white">
        Unique Code*{" "}
        <span className="text-[#b7b7b7] mb-2 text-[12px]">
          (found on the inside of your product)
        </span>
      </label>
      <Input
        type="text"
        className="w-full px-4 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex flex-row justify-between items-center mt-10">
        <p className="items-center text-white">*Terms and Conditions</p>
        <button className="bg-blue-50 text-blue-500 px-12 py-2 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
