import React, { useState } from "react";
import { Menu } from "./Menu";
import "../Styles/LeftMenu.css";
import { MenuList } from "./MenuList";
import { PlayListMenu } from "./PlayListMenu";
import { TrackList } from "./TrackList";

import { ImSpotify } from "react-icons/im";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoExit } from "react-icons/io5";

function LeftMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    console.log("Выход из аккаунта");
  };

  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <ImSpotify />
        </i>
        <h2>Spotify</h2>
        <i onClick={toggleDropdown}>
          <IoEllipsisHorizontalSharp />
        </i>
        {isDropdownOpen && (
          <div className="dropdownMenu">
            <button onClick={handleLogout}>
              Log out
              <i>
                <IoExit />
              </i>
            </button>
          </div>
        )}
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Search" />
        <i className="searchIcon">
          <CiSearch />
        </i>
      </div>

      <div>
        <Menu title={"MENU"} menuObject={MenuList} />
      </div>
      <PlayListMenu />
      <TrackList />
    </div>
  );
}

export { LeftMenu };
