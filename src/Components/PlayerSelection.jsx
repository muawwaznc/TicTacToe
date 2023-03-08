import Image from "../Resources/img.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function PlayerSelection() {
  return (
    <div>
      <div className="App blur">
        <div className="body">
          <div className="game-area player-selection">
            <button>
              <Link to="/SGame">Single Player</Link>
            </button>
            <button>
              <Link to="/DGame">Double Player</Link>
            </button>
          </div>
          <img src={Image} alt="..." />
        </div>
      </div>
    </div>
  );
}
export default PlayerSelection;
