/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";
import { getRelatedVideos } from "../../api/axios";
import { getVideoInfo } from "../../helpers/fetchingData";
import VideoCard from "../../components/VideoCard/VideoCard";

export default function RelatedVideos({ currentVideo }) {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getRelatedVideos(currentVideo).then((res) => {
      getVideoInfo(res).then((res) => setRelatedVideos(res));
    });
  }, [getRelatedVideos]);

  const relatedVideosMarkUp = relatedVideos?.map((video) => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      info={video.snippet}
      eInfo={video.extraInfo}
      img={video.snippet.thumbnails.medium.url}
      channelInfo={video.channelInfo}
    />
  ));

  return <div className="related_list">{relatedVideosMarkUp}</div>;
}
