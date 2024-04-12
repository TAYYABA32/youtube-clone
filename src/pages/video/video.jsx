import { useParams } from "react-router-dom";
import Recommended from "../../components/Recommended/Recommended";
import Playvideo from "../../components/playvideo/Playvideo";
import "./video.css";
const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
};

export default Video;
