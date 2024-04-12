import "./playvideo.css";
// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
// import jack from "../../assets/jack.png";
// import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY, value_conveter } from "../../data";

import moment from "moment";
import { useParams } from "react-router-dom";

const Playvideo = () => {
  const { videoId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [apiData, setApiData] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  console.log("videoId", videoId);
  console.log("apiData", apiData);

  // eslint-disable-next-line no-unused-vars
  const fetchvideoData = async () => {
    // eslint-disable-next-line no-undef, no-unused-vars
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data.items[0]);
      });
  };

  // eslint-disable-next-line no-unused-vars
  const fetchOtherData = async () => {
    // eslint-disable-next-line no-unused-vars
    console.log(channelData, "channelData");

    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet?.channelId}&key=${API_KEY} `;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => {
        if (data?.items?.length > 0) {
          setChannelData(data?.items[0]);
        }
      });
    // eslint-disable-next-line no-unused-vars
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY} `;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data.items);
        console.log(commentData, "commentData");
      });
  };

  useEffect(() => {
    if (videoId) {
      fetchvideoData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    if (apiData?.snippet?.channelId) {
      fetchOtherData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiData]);
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      {/* <iframe width="1040" height="585" src="https://www.youtube.com/embed/7D4vNcK6D38" title="Coke Studio | Season 14 | Tu Jhoom | Naseebo Lal x Abida Parveen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_conveter(apiData.statistics.viewCount) : "16k"} Views
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{" "}
            {apiData ? value_conveter(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
          {/* <span>
            <img src={jack} alt="" /> 125
          </span>
          <span>
            <img src={user_profile} alt="" /> 125
          </span> */}
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_conveter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribes</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description Here"}
        </p>

        <hr />
        <h4>
          {apiData ? value_conveter(apiData.statistics.commentCount) : 102}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={
                  item?.snippet?.topLevelComment?.snippet
                    ?.authorProfileImageUrl ?? "NA"
                }
                alt="NA"
              />
              <div>
                <h3>
                  {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}{" "}
                  <span>1 day ago</span>
                </h3>
                <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_conveter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={like} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playvideo;
