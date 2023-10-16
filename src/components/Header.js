import React from "react";
import { FaSistrix } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex justify-between py-5 bg-slate-100 px-8">
      <div>Hey Shahrukh</div>
      <div className="">
      <FaSistrix className="inline-flex mr-2"/> 
        <input className="border-2" type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
