import  { useState } from "react"; // Combine the imports
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Video from "./pages/Video/Video"; // Corrected component name

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Changed setsidebar to setSidebar

  return (
    <div>
      <Navbar setSidebar={setSidebar} /> {/* Corrected prop name */}
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />{" "}
        {/* Corrected component name */}
      </Routes>
    </div>
  );
};

export default App;
