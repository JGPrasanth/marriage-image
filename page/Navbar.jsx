 import React from "react";
 import "./navbar.css"
 import { FaBars } from "react-icons/fa";
 import { IoIosSearch } from "react-icons/io";

 function Navbar(){
    return(
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
                    <img  src="./logo.png" alt=""></img>
                </div>
            </div>
        </div>
    )
 }

 export default Navbar