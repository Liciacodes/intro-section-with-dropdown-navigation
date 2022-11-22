import React from "react";
import { HeroBackgroundImage } from "./HeroBackgroundImage";
import { HeroText } from "./HeroText";

export const HeroSection = () => {
  return (
    <div className="flex w-[70%] md:w-[90%]  mx-auto flex-col-reverse lg:flex-row">
      <HeroText />
      <HeroBackgroundImage />
    </div>
  );
};
