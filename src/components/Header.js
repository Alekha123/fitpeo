import React from "react";
import { FaSistrix } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between py-5 bg-slate-100 px-8">
      <div>Hey Shahrukh</div>
      <div className="relative">
      <FaSistrix className="inline-flex mr-2 absolute mt-2 ml-2"/> 
        <input className="border-2 pl-7" type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
