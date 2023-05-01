import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useSideBar } from "../../context/SideBarContext";

export default function index() {
  const { videoId } = useParams();
  let location = useLocation();
  const { state: currentVideo } = location;

  const { setIsToggled } = useSideBar();

  useEffect(() => {
    setIsToggled(false);
  }, []);

  const onPlayerReady = (e) => {
    e.target.playVideo();
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <YouTube className="youtube_player" videoId={videoId} onPlay={onPlayerReady} opts={opts} />
    </div>
  );
}
