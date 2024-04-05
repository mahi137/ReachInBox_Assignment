import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import store from '../Redux/store';
import { FiMoon } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { switchTheme } from '../Redux/Action';
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useSelector((store)=> store.theme)
  const handleTheme = ()=>{
    if(theme == "dark"){
      dispatch(switchTheme("light"))
    }else{
      dispatch(switchTheme("dark"))
    }
  }
  const textColor = theme == "dark" ? "text-white" : "text-[#5B5F66]"
  const bgColor = theme == "dark" ? "bg-[#1F1F1F]" : "bg-white"
  const borderClr = theme == "dark" ? "border-gray-700" : "border-[#DEDEDE]"
  const btnBgClr = theme == "dark" ? "bg-gray-800" : "bg-[#DADEE1]"
  //console.log(theme, bgColor, textColor)
  return (
    <div className={`flex justify-between items-center h-16 w-full ${bgColor} ${textColor} 
    border-b ${borderClr}`}>
        <h1 className='ml-5 font-bold text-l'>Onebox</h1>
        <div className='flex items-center justify-center'>
        <button className={`mr-6 flex items-center justify-between ${btnBgClr} border ${borderClr} rounded-full p-1`} onClick={handleTheme}>
      {(theme == "dark") ? (
        <>
        <>
        <BsCircleFill className="w-4 h-4 text-white-300 mr-1" />
        <MdOutlineWbSunny className="w-4 h-4 ml-1 text-yellow-400" />
      </>
        </>
      ) : (
        <>
        <FiMoon className="w-4 h-4  text-yellow-400 mr-1" />
        <BsCircleFill className="w-4 ml-1 h-4 text-white " />
        </>
      )}
    </button>
            
            <div className='flex justify-center items-center mr-5' >
            <p>Tim's Workspace</p>
            <RiArrowDropDownLine size={25}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar