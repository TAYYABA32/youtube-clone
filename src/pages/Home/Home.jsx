import { useState } from "react";
import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/sidebar/sidebar";

import "./Home.css";

// eslint-disable-next-line react/prop-types
const Home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <div className="wrapper-container">
        <Sidebar
          sidebar={sidebar}
          category={category}
          setCategory={setCategory}
        />

        <Feed category={category} />
      </div>
    </>
  );
};
export default Home;
