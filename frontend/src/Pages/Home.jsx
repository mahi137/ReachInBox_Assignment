import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import mailImg from "./mail.png"
import mailImgWhite  from "./mailWhite.png"
import { useParams } from "react-router-dom";
import { getEmailList, resetData, updateToken } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
const Home = () => {
  const dispatch = useDispatch()
  const allMailList = useSelector((store)=> store.listmail)

  useEffect(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    if (tokenParam != "null" || tokenParam != "") {
      localStorage.removeItem('token');
      localStorage.setItem('token', tokenParam);
    }
    
    const token = localStorage.getItem("token")
  
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    if(allMailList.length <= 0){
      dispatch(resetData(config)).then((res)=>{
        console.log(res)
      }).catch((err)=> alert("Server error! unable to reset"))
    }  
    dispatch(updateToken(tokenParam))
    dispatch(getEmailList(config))
  },[])

  const theme = useSelector((store)=> store.theme)
  const bgColor = theme == "dark" ? "bg-black" : "bg-[#FFFFFF]"
  const textColor = theme == "dark" ? "text-white" : "text-black"

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full ">
        <Navbar />
        <div className={`${bgColor} h-full w-full flex flex-col items-center ${textColor} -mt-16 pt-36`}>
  <img src={(theme === "dark" ? mailImg : mailImgWhite)} alt="mailimg" className="max-w-full max-h-full" style={{width: "280px", height:"229px"}} />
  <h1 className="font-bold text-xl">It's the beginning of a legendary sales pipeline</h1>
  <br />
  <p>When you have inbound E-mails</p>
  <p>You'll see them here</p>
</div>
      </div>
    </div>
  );
};

export default Home;
