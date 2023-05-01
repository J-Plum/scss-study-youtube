/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { BiDotsVerticalRounded } from "react-icons/bi";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

export default function VideoCard({ id, video, img, info, eInfo, channelInfo }) {
  dayjs.extend(relativeTime);

  const time = dayjs(info.publishedAt).fromNow(true);
  return (
    <div className="videoCard">
      <Link to={`/video/${id}`} state={{ ...video }}>
        <div className="video_preview">
          <img src={img} alt={info.title} />
          {eInfo.duration ? (
            <div className="video_duration">
              <span>{eInfo.duration}</span>
            </div>
          ) : null}
        </div>
        <div className="video_info_container">
          <div className="avatar_container">
            <img src={img} alt={`${info.channelTitle} avatar`} className="avatar" />
          </div>
          <div className="video_text_container">
            <h3>{info.title.length > 60 ? info.title.substring(0, 60) + "..." : info.title}</h3>
            <div className="video_info">
              <Link to={`/channel/${channelInfo.customUrl}`}>
                <div className="channelName">{info.channelTitle}</div>
              </Link>
              <div className="video_metadata">
                <span>{eInfo.viewCount} views</span> &nbsp;
                <span className="dot_separator"> &#8226; </span> &nbsp;
                <span>{time} ago</span>
              </div>
            </div>
          </div>
          <div className="dots_container">
            <BiDotsVerticalRounded size={25} className="dots" />
          </div>
        </div>
      </Link>
    </div>
  );
}