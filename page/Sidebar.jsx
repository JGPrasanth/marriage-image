import React from "react";
import './sidebar.css'
import { FaCarTunnel } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoCar } from "react-icons/io5";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";
import { GrUnorderedList } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
//  import { FaBars } from "react-icons/fa";
//  import { IoIosSearch } from "react-icons/io";
function Sidebar(){
    return(
        <aside>
        <div className="navbar">
            <div className="navigation">
                <ul>

                    <li>
                        <a href="/">
                            <span className="icon"><FaCarTunnel /></span>
                            <span className="name">Mint District</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><MdDashboard /></span>
                            <span className="name">Dashbrand</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><BsPerson /></span>
                            <span className="name">Customer</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><BsFileEarmarkPersonFill /></span>
                            <span className="name">Society</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><FaCar /></span>
                            <span className="name">Brand</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><IoCar /></span>
                            <span className="name">Model</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><IoIosColorPalette /></span>
                            <span className="name">Color</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><GrUnorderedList /></span>
                            <span className="name">Order</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><IoSettingsOutline /></span>
                            <span className="name">Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><BsPersonLinesFill /></span>
                            <span className="name">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="icon"><CiLogout /></span>
                            <span className="name">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
{/* 
        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <FaBars />
                </div>

                <div className="search">
                    <label>
                        <input type="text"  placeholder="Search here"/>
                        <IoIosSearch />
                    </label>
                </div>

                <div className="user">
                    
                </div>
            </div>
        </div> */}
        </aside>
        
    )
}
export default Sidebar