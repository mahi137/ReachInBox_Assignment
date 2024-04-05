import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AllInbox from "../Components/Inbox";
import MailBox from "../Components/MailBox";
import LeadSidebar from "../Components/LeadSidebar";
import { useSelector } from "react-redux";

const AllMail = () => {

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-black" : "bg-[#FAFAFA]"
  const borderClr = theme == "dark" ? "border-gray-800" : "border-[#E0E0E0]"

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className={`${bgColor} w-full flex`}>
        <div div className='w-1/5 px-3'>
            <AllInbox />
            </div>
          <div  className={`border-r border-l ${borderClr} w-3/5`} style={{ minHeight: "calc(100vh - 64px) " }}>
            <MailBox/>
          </div>
          <div className="w-1/5" style={{ minHeight: "calc(100vh - 64px)" }}>
            <LeadSidebar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMail;