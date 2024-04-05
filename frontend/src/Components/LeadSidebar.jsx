import React from "react";
import { IoIosSend } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const LeadSidebar = () => {
  const theme = useSelector((store) => store.theme);
  const bgColor = theme == "dark" ? "bg-[#23272C]" : "bg-[#ECEFF3]";
  const leadText = theme == "dark" ? "text-white" : "text-[#637381]";
  const textColor = theme == "dark" ? "text-white" : "text-[#454F5B]";
  const leadTextRight = theme == "dark" ? "text-[#B9B9B9]" : "text-black";
  const circleBg = theme == "dark" ? "bg-gray-500" : "bg-[#DFE3E8]";

  return (
    <div className={`${theme == "dark" ? "bg-[#000000]" : "bg-[#F9F9F9]"}`}>
      <div
        className={`${bgColor} p-2 pr-10 ${textColor} rounded-lg m-1 mt-4 text-l font-semibold`}
      >
        Lead Details
      </div>
      <div className="m-5 mb-11">
        <div className={`flex justify-between ${leadText} mt-5`}>
          <p>Name</p>
          <p className={`${leadTextRight}`}>Orlando</p>
        </div>
        <div className={`flex justify-between ${leadText} mt-5`}>
          <p>Contact No</p>
          <p className={`${leadTextRight}`}>+54-9062827869</p>
        </div>
        <div className={`flex justify-between ${leadText} mt-5`}>
          <p>Email ID</p>
          <p className={`${leadTextRight}`}>orlando@gmail.com</p>
        </div>
        <div className={`flex justify-between h-auto  ${leadText} mt-5`}>
          <p className="mr-8 ">Linkedin</p>
          <p className={`${leadTextRight} ml-[45px] text-right text-balance`}>
            linkedin.com/in/ timvadde/
          </p>
        </div>
        <div className={`flex justify-between ${leadText} mt-5`}>
          <p>Company Name</p>
          <p className={`${leadTextRight}`}>Reachinbox</p>
        </div>
      </div>
      <div
        className={`${bgColor} p-2 pr-10 ${textColor} p-2 pr-10 rounded-lg m-1 mt-4 text-l font-semibold`}
      >
        Activities
      </div>
      <div className={`p-5 m-5 mb-1 ${textColor}`}>
        <p className="text-l font-semibold">Campaign Name</p>
        <p className="mt-4">3 Steps | 5 Days in Sequence</p>
      </div>
      <div className="flex flex-col items-left m-5 mt-2 pl-5">
        <div className={`flex flex-col ${textColor} `}>
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <div
                className={`w-12 h-12 ${circleBg} border rounded-full flex items-center justify-center`}
              >
                <MdOutlineEmail size={20} />
              </div>
              <div className={`h-14 w-1 flex ${circleBg}`}></div>
            </div>

            <p className={`ml-3 ${textColor} font-xl`}>
              Step 1: Email <br />
              <span className="flex ">
                {" "}
                <IoIosSend className="m-2 font-light" /> Send 3rd, Feb
              </span>
            </p>
          </div>
        </div>

        <div className={`flex flex-col ${textColor}`}>
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <div
                className={`w-12 h-12 ${circleBg} border rounded-full flex items-center justify-center`}
              >
                <MdOutlineEmail size={20} />
              </div>
              <div className={`h-14 w-1 flex ${circleBg}`}></div>
            </div>
            <p className={`ml-3 ${textColor} font-xl`}>
              Step 2: Email <br />
              <span className="flex">
                {" "}
                <LuMailOpen className="m-2 text-yellow-300" /> Open 5th, Feb
              </span>
            </p>
          </div>
        </div>

        <div className={`flex flex-col ${textColor}`}>
          <div className="flex">
            <div className="flex flex-col items-center justify-center">
              <div
                className={`w-12 h-12 ${circleBg} border rounded-full flex items-center justify-center`}
              >
                <MdOutlineEmail size={20} />
              </div>
              <div className={`h-14 w-1 flex `}></div>
            </div>
            <p className={`ml-3 ${textColor} font-xl`}>
              Step 3: Email <br />
              <span className="flex">
                {" "}
                <LuMailOpen className="m-2 text-yellow-300" /> Open 5th, Feb
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadSidebar;
