import React from "react";
import { PlayList } from "./PlayList";

import { GrAdd } from "react-icons/gr";
import { RiPlayListLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

function PlayListMenu() {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>PlayList</p>
        <i>
          <GrAdd />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playlist">
              <i className="list">
                <RiPlayListLine />
              </i>
              <p>Sample name</p>
              <i className="trash">
                <IoMdTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { PlayListMenu };
