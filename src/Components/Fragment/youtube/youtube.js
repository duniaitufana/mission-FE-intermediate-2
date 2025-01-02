import React, { useRef, useEffect } from "react";
import Styles from "./youtube.module.css";
import Star from "../../../images/icons/homepage/star.svg";
import PlayBtn from "../../../images/icons/homepage/play-btn.svg";
import CheckBtn from "../../../images/icons/homepage/check-btn.svg";
import OpenBtn from "../../../images/icons/homepage/hide.svg";

const YouTubeIframe = ({
  title,
  rate,
  getIMG,
  isNew,
  getIMG_second,
  adult,
  isEpisode,
  genre,
  trailer,
}) => {
  const playerRef = useRef(null);
  const IframeRef = useRef("player");

  const onYouTubeIframeAPIReady = () => {
    playerRef.current = new window.YT.Player("player", {
      title: title,
      videoId: trailer.replace("https://youtube.com/embed/", ""),
      events: {
        onReady: () => playerRef.current.playVideo(),
      },
    });
  };

  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  } else {
    onYouTubeIframeAPIReady();
  }

  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const pauseVideo = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  return (
    <>
      <div ref={playerRef} id={IframeRef} className={Styles.Iframe}></div>

      {isNew ? <p className={Styles.Isnew}>New</p> : null}
      {rate && title ? (
        <div className={Styles.FirstDesc}>
          <p>{title}</p>
          <div>
            <img src={Star} alt="star-rate" />
            <span>{`${rate}/10`}</span>
          </div>
        </div>
      ) : null}
      <div className={Styles.DescImg}>
        <div>
          <div>
            <img src={PlayBtn} alt="play-btn" />
            <span className={Styles.Span}>
              <img src={CheckBtn} alt="check-btn" />
            </span>
          </div>
          <div>
            <span className={Styles.Span}>
              <img src={OpenBtn} alt="open-btn" />
            </span>
          </div>
        </div>
        <div>
          <span>{adult}+</span>
          <span>{isEpisode ? `Episode ${isEpisode}` : "Movie"}</span>
        </div>
        <div>
          {genre ? (
            <>
              <span>{genre[0]}</span>
              <span>{genre[1]}</span>
              <span>{genre[2]}</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default YouTubeIframe;
