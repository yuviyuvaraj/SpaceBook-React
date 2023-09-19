import React from "react";
import { BsFillPersonFill, BsFillChatLeftTextFill,BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import "./Top.css";
function Top() {
  return (
    <>
      <section>
        <div className="Topbar">
          <div className="logo">
            <span>SpaceBook</span>
          </div>

          <div className="search">
          <span className="searchicon"><BsSearch/></span>
          
          <div className="searchbar">
            <input type="text" placeholder="search for person or news" />
          </div></div>
          <div className="links">
            <span>HOME </span>
            <span>TIMELINE</span>
          </div>
          <div className="notification">
            <span className="icons">
              <BsFillPersonFill />
              <sup>4</sup>
            </span>
            <span className="icons">
              <BsFillChatLeftTextFill />
              <sup>99</sup>
            </span>
            <span className="icons">
              <IoIosNotifications />
              <sup>4</sup>
            </span>
          </div>
          <div className="profile"> 
            <img src="Profile.jpg"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
