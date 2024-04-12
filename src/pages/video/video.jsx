import Recommended from "../../components/Recommended/Recommended";
import Playvideo from "../../components/playvideo/Playvideo";
import "./video.css";
const Video = () => {
  return (
    <div className="play-container">
      <Playvideo />
      <Recommended />
    </div>
  );
};

export default Video;
