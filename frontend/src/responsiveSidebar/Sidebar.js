import React, { useState } from 'react'
import {AiOutlineLeft} from "react-icons/ai"
import {DiJqueryLogo} from "react-icons/di"
import image2 from "./image2.png"


function Sidebar() {

    const [open, setOpen] = useState(true);

    const menus = [
        {title: "Dashboard", src: "Chart_fill"},
        {title: "Inbox", src: "Chat"},
        {title: "Accounts", src: "User", gap:true},
        {title: "Schedule", src: "Calender"},
        {title: "Search", src: "Search"},
        {title: "Analytics", src: "Chart"},
        {title: "Files", src: "Folder", gap: true},
        {title: "Setting", src: "Setting"},
    ]
    return(
        <div className='flex'>
            <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 bg-dark-purple h-screen relative`}>
                <AiOutlineLeft className={`bg-gray-100 absolute cursor-pointer rounded-full -right-3 top-9 w-7 h-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}/>
                <div className='flex gap-x-4 items-center'>
                    <img src={image2} className={`cursor-pointer duration-500 text-white w-6 h-6 ${open && "rotate-[360deg]"}`} />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Designer</h1>
                </div>
                <ul className='pt-6'>
                    {menus.map((menu,index) => (
                        <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
                            <img src={require(`./${menu.src}.jpg`)} className="w-6 h-6" />
                            <span className={`${!open && 'scale-0'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
                <h1>Home page</h1>
            </div>
        </div>
    )
}

export default Sidebar