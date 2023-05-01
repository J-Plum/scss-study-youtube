import React, { useCallback, useEffect, useState } from "react";
import axios from "../../api/axios";
import { getVideoInfo } from "../../helpers/fetchingData";

export default function MainPage() {
  const [mainVideos, setMainVideos] = useState([]);

  const getMainVideos = useCallback(async () => {
    try {
      const response = await axios.get(`/search?part=snippet&maxResults=2&q='르세라핌'%20place`);
      let videosArray = await response.data.items;
      videosArray = await getVideoInfo(videosArray);
      setMainVideos(videosArray);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMainVideos();
  }, []);

  return <section className="mainGallery"></section>;
}
