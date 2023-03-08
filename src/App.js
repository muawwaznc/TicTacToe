import { Routes, Route } from "react-router-dom";
import "./App.css";

import DGame from "./Components/DGame";
import SGame from "./Components/SGame";
import PlayerSelection from "./Components/PlayerSelection";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlayerSelection />} />
        <Route path="/DGame" element={<DGame />} />
        <Route path="/SGame" element={<SGame />} />
      </Routes>
    </div>
  );
}
export default App;
