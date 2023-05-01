import React, { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSideBar } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";

export default function MainPage() {
  const storedVideos = JSON.parse(localStorage.getItem("mainVideos"));
  const [mainVideos, setMainVideos] = useState(storedVideos || []);

  const { setIsToggled } = useSideBar();

  useEffect(() => {
    setIsToggled(true);
  })

  const getMainVideos = useCallback(async () => {
    try {
      if (!storedVideos) {
        const response = await axios.get(`/search?part=snippet&maxResults=10&q='르세라핌'%20place`);
        let videosArray = await response.data.items;
        videosArray = await getVideoInfo(videosArray);
        setMainVideos(videosArray);

        localStorage.setItem("mainVideos", JSON.stringify(videosArray));
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMainVideos();
  }, []);

  return (
      <section className="mainGallery">
        {mainVideos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            video={video}
            img={video.snippet.thumbnails.medium.url}
            info={video.snippet}
            eInfo={video.extraInfo}
            channelInfo={video.channelInfo}
          />
        ))}
      </section>
  );
}
