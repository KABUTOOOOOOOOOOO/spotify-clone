import React, { useState } from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa";

import ArtistBanner from "../assets/banner.png";
import CheckMark from "../assets/checkmark.png";

function Banner() {
  const [isFollowing, setIsFollowing] = useState(true);

  const toggleFollow = () => {
    setIsFollowing((prevFollowing) => !prevFollowing);
  };

  return (
    <div className="banner">
      <img src={ArtistBanner} alt="" className="bannerImg" />
      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <IoEllipsisHorizontalSharp />
          </i>
        </div>

        <div className="artistContainer">
          <div className="left">
            <div className="name">
              <h2>The Weekend</h2>
              <img src={CheckMark} alt="" />
            </div>
            <p>
              <i>
                <LiaHeadphonesSolid />
              </i>
              106,851,738 <span> Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#" className="playButton">
              Play
            </a>
            <a
              href="#"
              onClick={toggleFollow}
              style={{
                background: isFollowing ? "#585858" : "#181818",
              }}
            >
              {isFollowing ? (
                <>
                  <i>
                    <FaCheck />
                  </i>
                  Following
                </>
              ) : (
                "Follow"
              )}
            </a>
          </div>
        </div>
      </div>
      <div className="bottomLayer"></div>
    </div>
  );
}

export { Banner };
