import "./playvideo.css";
// import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

// eslint-disable-next-line react/prop-types
const Playvideo = ({ videoId }) => {
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      {/* <iframe width="1040" height="585" src="https://www.youtube.com/embed/7D4vNcK6D38" title="Coke Studio | Season 14 | Tu Jhoom | Naseebo Lal x Abida Parveen" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        // eslint-disable-next-line react/no-unknown-property
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>
        The world is a book and those who do not travel read only one page.
      </h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 3 days ago</p>
        <div>
          <span>
            <img src={like} alt="" /> 125
          </span>
          <span>
            <img src={dislike} alt="" /> 125
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
        <img src={jack} alt="" />
        <div>
          <p>Tayyaba Podcast</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribes</button>
      </div>
      <div className="vid-description">
        <p>Failures are the part of life</p>
        <p>Subscribe Life Change to watch more tutorials on life failures</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              I enjoy my alone time, I can do what I want, no interuptions, dont
              have to talk or listen.Thanks a lot for such wonderfull video.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={like} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              I enjoy my alone time, I can do what I want, no interuptions, dont
              have to talk or listen.Thanks a lot for such wonderfull video.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={like} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              I enjoy my alone time, I can do what I want, no interuptions, dont
              have to talk or listen.Thanks a lot for such wonderfull video.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={like} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jack Nicholson <span>1 day ago</span>
            </h3>
            <p>
              I enjoy my alone time, I can do what I want, no interuptions, dont
              have to talk or listen.Thanks a lot for such wonderfull video.
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={like} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
