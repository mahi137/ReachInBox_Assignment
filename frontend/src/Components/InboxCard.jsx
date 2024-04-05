import React from 'react';
import { IoIosSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { GoDotFill } from "react-icons/go";

const InboxCards = ({threadId, toEmail, subject,sentAt, handleSingleThread}) => {
  const date = new Date(sentAt);

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const formattedDate = monthNames[date.getUTCMonth()] + ' ' + date.getUTCDate();

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-gray-800" : "bg-[#DFE3E8]"
  const borderClr = theme == "dark" ? "border-gray-700" : "border-white"
  const textColor = theme == "dark" ? "text-white" : "text-[#343A40]"

  const handleCurThread = ()=>{
    handleSingleThread(threadId)
  }

  return (
    <div onClick={handleCurThread} className={`${textColor} cursor-pointer w-full max-w-md flex flex-col justify-center border-b ${borderClr} p-4`}>
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold'>{toEmail}</h1>
        <p className='text-[#919EAB]'>{formattedDate}</p>
      </div>
      <p className='text-sm'>{subject}.</p>
      <div className='flex items-center mt-4 '>
        <button className={`flex justify-center items-center ${bgColor} py-1 px-4 rounded-2xl mr-4 line`}>
          <GoDotFill/><span className='ml-1 text-xs'>Interested</span>
        </button>
        <button className={`flex justify-center items-center ${bgColor} py-1 px-2 rounded-2xl`}>
          <IoIosSend/><span className='ml-1 text-xs' style={{whiteSpace:'nowrap'}}>Campaign Name</span>
        </button>
      </div>
    </div>
  );
};

export default InboxCards;