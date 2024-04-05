import React, { useEffect } from "react";
import InboxCards from "./InboxCard";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { getEmailList, getThreadData, updateCurThread } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Inbox = () => {
  const allMailList = useSelector((store) => store.listmail);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    dispatch(getEmailList(config));
  }, []);

  const handleSingleThread = (threadId) => {
    dispatch(updateCurThread(threadId));
    dispatch(getThreadData(threadId, config));
  };

  const theme = useSelector((store) => store.theme);
  const bgColor = theme == "dark" ? "bg-gray-800" : "bg-[#DFE3E8]";
  const textColor = theme == "dark" ? "text-white" : "text-black";
  const borderClr = theme == "dark" ? "border-gray-700" : "border-white"

  const totalMail = allMailList.length;
  return (
    <>
      <div className="pt-10 pb-5 ml-3">
        <h1 className="text-blue-500 text-xl font-bold flex items-center">
          All Inbox(s)
          <RiArrowDropDownLine />
        </h1>
        <p className="text-gray-500">
          <span className={`font-bold ${textColor} text-sm mr-1`}>
            {totalMail}/{totalMail}
          </span>
          Inboxes selected
        </p>
      </div>
      <div className={`relative ml-2 px-1 flex justify-center rounded-md items-center ${borderClr} ${bgColor} border`}>
      <CiSearch className="top-2 text-2xl m-1  text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className={`${bgColor} p-2 rounded-md w-[95%] focus:outline-none ${textColor}`}
        />
        
      </div>
      <div className={`${textColor} flex justify-between mt-3 px-2 text-xl`}>
        <div>
          <span
            className={`text-blue-500 ${bgColor} px-3 py-1 text-xs rounded-2xl mr-1`}
          >
            {totalMail}
          </span>
          <span className="text-lg">New Replies</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="mr-1 text-lg">Newest</span>
          <RiArrowDropDownLine />
        </div>
      </div>
      {allMailList.map((item) => {
        return (
          <InboxCards
            key={item.id}
            {...item}
            handleSingleThread={handleSingleThread}
          />
        );
      })}
    </>
  );
};

export default Inbox;
