import { AudioList } from "./AudioList";
import React, { useState } from "react";
import "../Styles/MiddMenu.css";
import { Banner } from "./Banner";
import { TbUsersGroup } from "react-icons/tb";

function MiddMenu() {
  const [activeTab, setActiveTab] = useState("Popular");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="middContainer">
      <Banner />
      <div className="menuList">
        <ul>
          <li className={activeTab === "Popular" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Popular")}>
              Popular
            </a>
          </li>
          <li className={activeTab === "Albums" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Albums")}>
              Albums
            </a>
          </li>
          <li className={activeTab === "Songs" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Songs")}>
              Songs
            </a>
          </li>
          <li className={activeTab === "Fans" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("Fans")}>
              Fans
            </a>
          </li>
          <li className={activeTab === "About" ? "active" : ""}>
            <a href="#" onClick={() => handleTabClick("About")}>
              About
            </a>
          </li>
        </ul>
        <div className="followers">
          <i>
            <TbUsersGroup />
          </i>
          81.1M
          <span> Followers</span>
        </div>
      </div>
      <AudioList />
    </div>
  );
}

export { MiddMenu };
