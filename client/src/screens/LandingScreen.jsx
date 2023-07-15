import React from "react";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const naviagte = useNavigate();

  return (
    <div className="flex text-3xl flex-col md:flex-row items-center justify-center h-screen gap-8">
      <button
        onClick={() => naviagte("/barber")}
        className="px-[17%] py-[17%] cursor-pointer border border-black rounded-lg hover:bg-green-200"
      >
        Barber
      </button>
      <button
        onClick={() => naviagte("/")}
        className="px-[17%] py-[17%] cursor-pointer border border-black rounded-lg hover:bg-green-200"
      >
        Customer
      </button>
    </div>
  );
};

export default LandingScreen;
