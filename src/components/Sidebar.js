import React from "react";
import { FaHashnode, FaRegMessage, FaUserLarge,} from "react-icons/fa6";
import { AiFillAppstore, AiFillCodepenCircle,  } from "react-icons/ai";
import { BiSolidBadgeDollar, BiWalletAlt, } from "react-icons/bi";
import { FcBusinessman, IconName } from "react-icons/fc";

const Sidebar = () => {
  return (
    <>
      <div className="bg-slate-800 flex flex-col h-screen justify-between">
        <div className="mx-auto">
          <div className="mx-auto text-white py-8"><FaHashnode className="inline-flex mr-2" />LogoDashboard</div>
          <div className="text-white mx-auto space-y-4">
            <div><AiFillAppstore  className="inline-flex mr-2"/>Dashboard</div>
            <div><AiFillCodepenCircle className="inline-flex mr-2"/>Product</div>
            <div><FaUserLarge className="inline-flex mr-2"/>Customers</div>
            <div><BiWalletAlt className="inline-flex mr-2"/>Income</div>
            <div><BiSolidBadgeDollar className="inline-flex mr-2"/>Promote</div>
            <div><FaRegMessage className="inline-flex mr-2"/>Help</div>
          </div>
        </div>

        <div className="text-white mx-auto mb-8"><FcBusinessman className="inline-flex mr-2 rounded"/>Evano</div>
      </div>
    </>
  );
};

export default Sidebar;
