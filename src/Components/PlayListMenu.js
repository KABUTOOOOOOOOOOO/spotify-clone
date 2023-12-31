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
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playlist" key={list.id}>
              <i className="list">
                <RiPlayListLine />
              </i>
              <p>{list.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export { PlayListMenu };
