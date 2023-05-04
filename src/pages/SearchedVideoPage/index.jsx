import React, { useState } from "react";
import { useEffect } from "react";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSearch } from "../../context/SearchContext";
import { useSideBar } from "../../context/SideBarContext";
import { getVideoInfo } from "../../helpers/fetchingData";

export default function SearchedVideoPage() {
  const [searchedVideos, setSearchedVideos] = useState([]);
  const { setIsToggled } = useSideBar();
  const { searchQuery } = useSearch();

  useEffect(() => {
    setIsToggled(true);
    getVideoInfo(searchQuery.videos).then((res) => {
      setSearchedVideos(res);
    });
  }, [searchQuery]);

  const searchedVideosMarkup =  searchedVideos?.map((video) => {
    return <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      img={video.snippet.thumbnails.medium.url}
      info={video.snippet}
      eInfo={video.extraInfo}
      channelInfo={video.channelInfo}
    />;
  });

  return <section className="searchedVideos">{searchedVideosMarkup}</section>;
}
