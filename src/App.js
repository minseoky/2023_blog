import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home.js";
import LectureNotes from "./routes/LectureNotes";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LectureNotes" element={<LectureNotes />} />
      </Routes>
  );
}

export default App;