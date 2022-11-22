import React from "react";

export const HeroText = () => {
  return (
    <div className=" flex-1  mt-[10px]  sm:ml-7 lg:px-20 ">
      <div className="lg:w-[5px]">
        <h1
          className="text-[#141414] text-4xl  md:text-7xl  mt-10
        font-bold "
        >
          Make remote work
        </h1>
      </div>

      <p className="mb-6 text-md text-[#696969] mt-6 lg:mt-24 lg:pr-11">
        Get your team in sync, no matter your location, Streamline processes,
        create team ritual, and watch productivity soar.
      </p>
      <button
        className="bg-[#141414] text-white px-4 py-3 
        rounded-lg mb-2 lg:mt-11 "
      >
        Learn more
      </button>
      <div className="flex justify-between  mt-2 lg:mt-11">
        <img src="images/client-databiz.svg" alt="databiz" />
        <img src="images/client-audiophile.svg" alt="autophile" />
        <img src="images/client-meet.svg" alt="meet" />
        <img src="images/client-maker.svg" alt="maker" />
      </div>
    </div>
  );
};
