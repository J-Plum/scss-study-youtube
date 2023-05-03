import React, { useEffect } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiFlagLine, RiShareForwardLine } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import { useLocation, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useSideBar } from "../../context/SideBarContext";
import dayjs from "dayjs";

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

  const videoHeaderMarkup = (
    <div className="video_main_info">
      <div className="tags">
        {currentVideo?.snippet?.tage?.map((tag, i) => {
          return (
            <p className="tag" key={i}>
              #{tag}
            </p>
          );
        })}
      </div>
      <h1>{currentVideo.snippet.title}</h1>
      <div className="videoplayer_metadata">
        <span>{currentVideo.extraInfo.viewCount} views</span>
        <span>
          <div className="dot_separator"> &#8226;</div>
          <span>{dayjs(currentVideo.snippet.publishedAt).format("MMM D, YYYY")}</span>
        </span>
      </div>
    </div>
  );

  // const videoCommentsMarkUp = videoComments?.map((item) => {
  //   const { id, snippet } = item.snippet.topLevelComment;
  //   return (
  //     <div className="comment_container" key={id}>
  //       <div className="comment_avatar_container">
  //         <img src={snippet.authorProfileImageUrl} alt="user avatar" />
  //       </div>
  //       <div className="comment_text_container">
  //         <div className="comment_author">
  //           {snippet.authorDisplayName}
  //           <span>{dayjs(snippet.publishedAt).fromNow()}</span>
  //         </div>
  //         <div className="comment_text">{snippet.textOriginal}</div>
  //         <div className="comment_buttons">
  //           <div>
  //             <BiLike size={16} />
  //             <span className="muted">100</span>
  //           </div>
  //           <div>
  //             <BiDislike size={16} />
  //           </div>
  //           <span className="muted">REPLY</span>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <section className="videoPage">
      <div className="columns_container">
        <div className="column column_1">
          <div className="youtube_player_container">
            <YouTube
              className="youtube_player"
              videoId={videoId}
              onPlay={onPlayerReady}
              opts={opts}
            />
          </div>
          <div className="videoplayer_info">
            {videoHeaderMarkup}
            <div className="main_header_buttons">
              <div className="likes_container"></div>
              <BiLike size={25} />
              <span>likes</span>
            </div>
            <div className="dislikes">
              <BiDislike size={25} />
              <span>dislikes</span>
            </div>
          </div>
          <div className="share">
            <RiShareForwardLine size={25} />
            <span>SHARE</span>
          </div>
          <div className="save">
            <MdPlaylistAdd size={25} />
            <span>SAVE</span>
          </div>
          <div className="report">
            <RiFlagLine size={25} />
          </div>
          <div className="channel_video_info">
            <div className="channel_data">
              <div className="channel_avata">
                <img src={currentVideo.channelInfo.thumbnails.default.url} alt="avatar" />
              </div>
              <div className="channel_title">
                <a href="/">{currentVideo.channelInfo.title}</a>
                <span>{currentVideo.channelInfo.subscriberCount} subscribers</span>
              </div>
              <div className="channel_subscribe">
                <button>SUBSCRIBED</button>
              </div>
            </div>
            <div className="video_description">{currentVideo.snippet.description}</div>
          </div>
          <div className="video_comments_container">
            <div className="video_comments_count">
              {currentVideo.extraInfo.commentCount} Comments
            </div>
            <div className="video_comments">{/* videoCommentsMarkup */}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
