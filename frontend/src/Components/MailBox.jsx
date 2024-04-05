import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoMdFlash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { MdReply } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { deleteThread, getEmailList, sendReply } from "../Redux/Action";
import Alert from "./Alert";
import ThreadCard from "./ThreadCard";

const MailBox = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const curThreadId = useSelector((store) => store.curThreadId);
  const curThreadData = useSelector((store) => store.curThreadData);
  const dispatch = useDispatch();

  const currentDate = new Date();
  currentDate.setHours(14);
  currentDate.setMinutes(5);
  const [replyObj, setReplyObj] = useState({
    from: "jeanne@icloud.com",
    to: "peter@reachinbox.com",
    subject: " Warmup Welcome",
    toName: "peter",
    fromName: "jeanne",
    body: "",
    sentAt: currentDate,
    references: [
      "<dea5a0c2-336f-1dc3-4994-191a0ad3891a@gmail.com>",
      "<CAN5Dvwu24av80BmEg9ZVDWaP2+hTOrBQn9KhjfFkZZX_Do88FA@mail.gmail.com>",
      "<CAN5DvwuzPAhoBEpQGRUOFqZF5erXc=B98Ew_5zbHF5dmeKWZMQ@mail.gmail.com>",
      "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
    ],
    inReplyTo: "<a1383d57-fdee-60c0-d46f-6bc440409e84@gmail.com>",
  });

  const theme = useSelector((store) => store.theme);
  const textColor = theme == "dark" ? "text-white" : "text-[#343A40]";
  const bgColor = theme == "dark" ? "bg-black" : "bg-[#FFFFFF]";
  const borderClr = theme == "dark" ? "border-gray-800" : "border-[#E0E0E0]";

  const [openEditor, setOpenEditor] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  // keyboard Events
  useEffect(() => {
    const handleKeyR = (event) => {
      if (event.key === "R") {
        setOpenEditor(true);
      }
    };

    document.addEventListener("keydown", handleKeyR);
  }, []);

  useEffect(() => {
    const handleKeyD = (event) => {
      if (event.key === "D") {
        setOpenAlert(true);
      }
    };

    document.addEventListener("keydown", handleKeyD);
  }, []);

  const handleReplyBody = (e) => {
    setReplyObj((prev) => ({ ...prev, body: e.target.innerText }));
    console.log(replyObj);
  };

  const handleSendReply = () => {
    console.log(replyObj, curThreadId);
    dispatch(sendReply(curThreadId, replyObj, config))
      .then((res) => {
        dispatch(getEmailList(config));
      })
      .catch((err) => alert("Server error! something went wrong"));

    setOpenEditor(false);
  };

  const handleVariable = () => {
    alert("variale set");
    let getText = document.getElementById("replyVariable").innerHTML;
    setReplyObj((prev) => ({ ...prev, body: getText }));
  };
  const handleReply = () => {
    setOpenEditor(true);
  };

  const closeEditor = () => {
    setOpenEditor(false);
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };
  return (
    <div className="w-full relative">
      <div
        className={`w-full border-b h-[90px] ${borderClr} ${textColor} ${bgColor} flex justify-between items-center`}
      >
        <div className="px-5 py-5 ">
          <p className="font-bold text-l">Orlando</p>
          <p className="text-sm text-gray-500">orladom@gmail.com</p>
        </div>
        <div className="flex w-[50%] justify-evenly items-center">
          <div
            className={`flex justify-center items-center border ${borderClr} ${bgColor} p-2 rounded-lg`}
          >
            <span className="inline-block bg-yellow-400 w-5 h-5 rounded-full border-4 border-gray-700 mr-1"></span>
            <span className="text-sm">Meeting Completed</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div
            className={`flex justify-center items-center border ${borderClr} ${bgColor} p-2 px-3 rounded-lg`}
          >
            <span className="text-sm">Move</span>
            <RiArrowDropDownLine size={30} />
          </div>
          <div className={`p-2 px-3 rounded-lg border ${borderClr} ${bgColor}`}>
            <BsThreeDots size={30} />
          </div>
        </div>
      </div>
      {openEditor && (
        <div
          className={`text-sm fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30 z-50`}
        >
          <div
            className={`rounded-lg w-[850px] h-[70%] mt-48 ml-10 border ${borderClr} ${
              theme == "dark" ? "bg-gray-900" : "bg-white"
            } ${textColor}`}
          >
            <div
              className={`rounded-t-lg px-5 py-1 flex justify-between ${
                theme == "dark" ? "bg-gray-600" : "bg-white-600"
              }`}
            >
              <p className={`text-lg font-semibold ${textColor}`}>Reply</p>
              <button
                className={`${textColor} px-4 py-1 rounded`}
                onClick={closeEditor}
              >
                X
              </button>
            </div>
            <div className={`border px-0 w-full ${borderClr}`}></div>
            <p className={`m-1 px-5 py-1 text-gray-500`}>
              To : <span className={`${textColor}`}>jeanne@icloud.com</span>
            </p>
            <div className={`border px-0 w-full ${borderClr}`}></div>
            <p className="m-1 px-5 py-1 text-gray-500">
              From :{" "}
              <span className={`${textColor}`}>peter@reachinbox.com</span>
            </p>
            <div className={`border px-0 w-full ${borderClr}`}></div>
            <p className="m-1 px-5 py-1 text-gray-500">
              Subject : <span className={`${textColor}`}>Warmup Welcome</span>
            </p>
            <div className={`border px-0 w-full ${borderClr}`}></div>
            <p className="text-gray-500 px-6 pt-4">Hi jeanne,</p>
            <div
              id="replyVariable"
              onInput={handleReplyBody}
              contentEditable="true"
              className="py-2 px-6 h-1/2 focus:outline-none focus:border-gray-500"
            ></div>
            <div className="bottom-0 left-0 flex  space-x-2 p-4">
              <button
                className="px-4 flex py-2 bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white"
                onClick={handleSendReply}
              >
                Send
                <FaCaretDown className="ml-4 mt-1" />
              </button>
              <button
                onClick={handleVariable}
                className={`px-4 flex py-2 ${textColor}`}
              >
                <IoMdFlash className="mt-1 p-0 text-xl" />
                Variables
              </button>
            </div>
          </div>
        </div>
      )}

      <Alert isOpen={openAlert} onClose={closeAlert} />

      {curThreadId == null ? (
        <>
          <div className="relative mx-5">
            <div
              className={`w-full flex justify-center items-center ${textColor} mt-3`}
            >
              <span
                className={`px-4 py-1 ${
                  theme == "dark"
                    ? "bg-[#171819] text-[#F8FAFC]"
                    : "bg-[#EEF1F4] text-[#777777]"
                } z-10`}
              >
                Today
              </span>
            </div>
            <div className={`border absolute top-4 w-full ${borderClr}`}></div>
          </div>

          <div
            className={`w-9/10 h-[286px] border
      ${
        theme == "dark"
          ? "bg-[#141517] border-gray-800 text-[#F8FAFC]"
          : "bg-[#F9F9F9] text-black"
      }
       mt-3 mx-5 p-5 rounded-lg`}
          >
            <div className="flex justify-between">
              <p className="text-xl">New Product Launch</p>
              <p className="text-gray-600 font-bold mt-1">
                20 june 2022 : 9:16AM
              </p>
            </div>
            <p className="mt-2 text-gray-500">
              from : jeanne@icloud.com cc : lennon.j@mail.com
            </p>
            <p className="mt-2 text-gray-500">to : lennon.j@mail.com</p>
            <div className="w-[70%]">
              <p className="mt-8">Hi {"{FIRST_NAME}"}</p>
              <p className="mt-3">
                I would like to introduce you to SaaSgrow, a productsized design
                service specifically tailored for saas startups. Our aim is to
                help you enhance the user experience and boost the virtual apeal
                of your software products.
              </p>
            </div>
          </div>
          <div className="relative mx-5">
            <div className="w-full flex justify-center items-center text-white mt-3 cursor-pointer">
              <span
                className={`px-4 py-1 ${
                  theme == "dark"
                    ? "bg-[#171819] text-[#F8FAFC]"
                    : "bg-[#EEF1F4] text-[#777777]"
                } z-10`}
              >
                View all <span className="text-blue-400 ">4</span> replies
              </span>
            </div>
            <div className={`border absolute top-4 w-full ${borderClr}`}></div>
          </div>
        </>
      ) : (
        <>
          {curThreadData.map((item) => {
            return <ThreadCard key={item.id} {...item} />;
          })}
          <div className="p-5 mt-16 relative cursor-pointer">
            <MdReply
              color="white"
              className="absolute top-7 left-12"
              size={30}
            />
            <button
              onClick={handleReply}
              className="bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white w-48 py-3 px-6"
            >
              Reply
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MailBox;
