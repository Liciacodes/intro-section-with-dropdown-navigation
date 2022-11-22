import React, { useState } from "react";
import { HeaderBtns } from "./HeaderBtns";
import { Logo } from "./Logo";
import NavBar from "./nav/NavBar";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MobileNavLinks } from "./MobileNavLinks";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const style = { fontSize: "2rem", fontWeight: "bold" };

  return (
    <div
      className={`${
        click
          ? " md:flex md:justify-between items-center py-6 px-20 absolute top-0 left-0 right-0 bottom-0 bg-[#000000]/50 z-[2]"
          : "flex justify-between items-center py-6 px-20 "
      }`}
    >
      <div className="flex lg:items-center ">
        <Logo />
        <NavBar />
      </div>
      <HeaderBtns />
      <div
        className="block  md:hidden absolute
        right-8 top-4 cursor-pointer"
      >
        {click ? (
          <AiOutlineClose onClick={handleClick} style={style} />
        ) : (
          <AiOutlineMenu onClick={handleClick} style={style} />
        )}
      </div>
      <MobileNavLinks click={click} handleClick={handleClick} style={style} />
    </div>
  );
};
