import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<video />} />
      </Routes>
    </div>
  );
};

export default App;
