import React, { useState } from "react";
import { HiVolumeUp } from "react-icons/hi";
import { BsMusicNoteList } from "react-icons/bs";
import { LuMonitorSpeaker } from "react-icons/lu";

import TrackLogo from "../assets/track.jpg";

function TrackList() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="trackList">
      <div className="top">
        <img src={TrackLogo} alt="" />
        <p className="trackName">
          Reminder
          <span className="trackSpan">The Weekend</span>
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
