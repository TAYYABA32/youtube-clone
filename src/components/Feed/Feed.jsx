import "./feed.css";
import { useState } from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

import { API_KEY } from "../../data";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet.contentDetails.statistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className="card">
        <img src={thumbnail1} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure
          intounknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure
          intounknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>
          The gladdest moment in human life, me thinks, is a departure into
          unknown lands.
        </h2>
        <h3> Richard Burton</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
};

export default Feed;
