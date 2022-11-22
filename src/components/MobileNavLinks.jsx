import React from "react";
import { SideBarMenu } from "../SideBarMenu";
import { LinkItem } from "./nav/LinkItem";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const MobileNavLinks = ({ click, handleClick, style }) => {
  return (
    <div
      className={`flex flex-col lg:hidden h-full absolute  top-0
  bottom-0 right-0 bg-white px-10 py-10 md:static
  transition-all duration-500 md:overflow-hidden ease-in
   ${!click ? "left-[99%]" : "left-[32%]"}`}
    >
      <div>
        {click ? (
          <AiOutlineClose
            onClick={handleClick}
            style={style}
            className="ml-[230px] mt-[-20px]"
          />
        ) : (
          <AiOutlineMenu
            onClick={handleClick}
            style={style}
            className="hidden"
          />
        )}
      </div>

      <ul>
        {SideBarMenu.map((item) => (
          <li className="mt-5">
            <LinkItem
              title={item.title}
              to={item.path}
              key={item.id}
              icon={item.icon}
              className="mt-8"
            />
          </li>
        ))}
        <div className="flex flex-col text-center mt-6">
          <button className="text-[#696969] mr-4 mb-6">Login</button>
          <button
            className="text-[#696969] border-2 border-[#696969] px-2 py-2
           rounded-[15px] text-bold hover:bg-[#696969] hover:text-white ease-out
           "
          >
            Register
          </button>
        </div>
      </ul>
    </div>
  );
};
