import React, { useRef, useEffect } from "react";

const YouTubeIframe = ({ trailer, title }) => {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player(iframeRef.current, {
        title: title,
        videoId: trailer,
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
  }, [trailer]);

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
      <div ref={iframeRef} />
    </>
  );
};

export default YouTubeIframe;
