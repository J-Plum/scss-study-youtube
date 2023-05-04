import axios from "axios";

const instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

export function loadComment(videoId) {
  return instance
    .get("commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
        maxResult: 10,
      },
    })
    .then((res) => {
      return res.data.items;
    });
}
export function getRelatedVideos(videoId) {
  return instance
    .get("search", {
      params: {
        part: "snippet",
        relatedToVideoId: videoId,
        type: "video",
        maxResult: 10,
      },
    })
    .then((res) => {
      return res.data.items;
    });
}

export function search(keyword) {
  return instance
    .get("search", {
      params: {
        part: "snippet",
        q: keyword,
        maxResult: 5,
      },
    })
    .then((res) => {
      return res.data.items;
    });
}

export default instance;
