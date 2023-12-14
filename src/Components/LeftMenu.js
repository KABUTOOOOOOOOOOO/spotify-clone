import React from "react";
import { Menu } from "./Menu";
import "../Styles/LeftMenu.css";
import { MenuList } from "./MenuList";

import { ImSpotify } from "react-icons/im";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PlayListMenu } from "./PlayListMenu";
import { TrackList } from "./TrackList";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <ImSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <IoEllipsisHorizontalSharp />
        </i>
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
