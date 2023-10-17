import React from "react";
import { FaHandsClapping, FaSistrix } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between py-5 bg-slate-100 px-8">
      <div className="  inline-flex ">Hey Shahrukh <FaHandsClapping className="pt-2 pl-1  fill-yellow-500 h-5 "/>,</div>
      <div className="relative">
      <FaSistrix className="inline-flex mr-2 absolute mt-2 ml-2"/> 
        <input className="border-2 pl-7" type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
