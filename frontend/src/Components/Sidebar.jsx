import React from "react";
import { SiGmail } from "react-icons/si";
import { IoIosSend } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { RiUserSearchFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { RiBarChartFill } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { FaInbox } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiLogoGmail } from "react-icons/bi";
import store from "../Redux/store";


const Sidebar = () => {
  const theme = useSelector((store)=> store.theme)
  const textColor = theme == "dark" ? "text-black" : "text-white"
  const bgColor = theme == "dark" ? "bg-gray-900" : "bg-[#FAFAFA]"
  const borderClr = theme == "dark" ? "border-gray-700" : "border-[#DEDEDE]"

  return (
    <div className={`${bgColor} flex flex-col min-h-screen w-15 p-3 border-r ${borderClr}`}>
      <div className={`${(theme == "dark" ? "bg-white" : "bg-black")} py-1 px-0.5 rounded flex justify-center items-center text-xl mt-1 ${textColor}`}>
        <SiGmail />
      </div>
      <div className="text-2xl mt-24 mb-2">
      <Link to="/home">
        <GoHomeFill
          
          className="hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        </Link>
        <RiUserSearchFill
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <IoMail
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <IoIosSend
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <FaThList
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        <Link to="/allmail">
        <FaInbox
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
        </Link>
        <RiBarChartFill
          
          className="mt-12 hover:bg-gray-700 hover:p-1 rounded text-gray-400"
        />
      </div>
        <div className="text-white text-xl bg-green-900 rounded-full flex justify-center items-center h-9 w-9 mt-36">AS</div>
    </div>
  );
};

export default Sidebar;