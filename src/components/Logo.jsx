import React from "react";
import { Link } from "react-router-dom";
// import {menuLinks} from '../../helpers/data'

export const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-bold text-[#141414] text-4xl static ml-[-60px] md:mr-6">
        snap
      </h1>
    </Link>
  );
};
