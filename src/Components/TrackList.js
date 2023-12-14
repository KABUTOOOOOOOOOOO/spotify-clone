import React from "react";
import { HiVolumeUp } from "react-icons/hi";
import { BsMusicNoteList } from "react-icons/bs";
import { LuMonitorSpeaker } from "react-icons/lu";

import TrackLogo from "../assets/track.jpg";

function TrackList() {
  return (
    <div className="trackList">
      <div className="top">
        <img src={TrackLogo} alt="" />
        <p className="trackName">
          Let U Go
          <span className="trackSpan">lucidbeatz</span>
        </p>
      </div>
      <div className="bottom">
        <HiVolumeUp />
        <input type="range" id="range1" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <LuMonitorSpeaker />
        </i>
      </div>
    </div>
  );
}

export { TrackList };
