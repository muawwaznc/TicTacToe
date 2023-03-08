import Image from "../Resources/img.jpg";
import "../App.css";
import { Link } from "react-router-dom";

var turn = "X";

function clickEvent(idName) {
  var button = document.getElementById(idName);
  if (turn === "X" && button.textContent === "") {
    button.textContent = turn;
    turn = "O";
  } 
  CheckWin();
  SystemMove();
}

function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function SystemMove(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");
    var btn5 = document.getElementById("btn5");
    var btn6 = document.getElementById("btn6");
    var btn7 = document.getElementById("btn7");
    var btn8 = document.getElementById("btn8");
    var btn9 = document.getElementById("btn9");
    var btns = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9];
    var random = Math.floor(Math.random() * 8) + 1;
    if(btns[random].textContent === ''){
        btns[random].textContent = turn;
        turn = "X";
    }
    else{
        SystemMove();
    }
}

function CheckWin() {
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  var btn5 = document.getElementById("btn5");
  var btn6 = document.getElementById("btn6");
  var btn7 = document.getElementById("btn7");
  var btn8 = document.getElementById("btn8");
  var btn9 = document.getElementById("btn9");

  var con1 =
    btn1.textContent !== "" && btn2.textContent !== "" && btn3.textContent !== "";
  var con2 =
    btn4.textContent !== "" && btn5.textContent !== "" && btn6.textContent !== "";
  var con3 =
    btn7.textContent !== "" && btn8.textContent !== "" && btn9.textContent !== "";
  var con4 =
    btn1.textContent !== "" && btn5.textContent !== "" && btn9.textContent !== "";
  var con5 =
    btn3.textContent !== "" && btn5.textContent !== "" && btn7.textContent !== "";
  var con6 =
    btn2.textContent !== "" && btn4.textContent !== "" && btn7.textContent !== "";
  var con7 =
    btn2.textContent !== "" && btn5.textContent !== "" && btn8.textContent !== "";
  var con8 =
    btn3.textContent !== "" && btn6.textContent !== "" && btn9.textContent !== "";

  if (
    btn1.textContent === btn2.textContent &&
    btn2.textContent === btn3.textContent &&
    con1
  ) {
    DilogueBox("(" + btn1.textContent + ") Wins");
  }
  if (
    btn4.textContent === btn5.textContent &&
    btn5.textContent === btn6.textContent &&
    con2
  ) {
    DilogueBox("(" + btn4.textContent + ") Wins");
  }
  if (
    btn7.textContent === btn8.textContent &&
    btn8.textContent === btn9.textContent &&
    con3
  ) {
    DilogueBox("(" + btn7.textContent + ") Wins");
  }
  if (
    btn1.textContent === btn5.textContent &&
    btn5.textContent === btn9.textContent &&
    con4
  ) {
    DilogueBox("(" + btn1.textContent + ") Wins");
  }
  if (
    btn3.textContent === btn5.textContent &&
    btn5.textContent === btn7.textContent &&
    con5
  ) {
    DilogueBox("(" + btn3.textContent + ") Wins");
  }
  if (
    btn1.textContent === btn4.textContent &&
    btn4.textContent === btn7.textContent &&
    con6
  ) {
    DilogueBox("(" + btn1.textContent + ") Wins");
  }
  if (
    btn2.textContent === btn5.textContent &&
    btn5.textContent === btn8.textContent &&
    con7
  ) {
    DilogueBox("(" + btn2.textContent + ") Wins");
  }
  if (
    btn3.textContent === btn6.textContent &&
    btn6.textContent === btn9.textContent &&
    con8
  ) {
    DilogueBox("(" + btn3.textContent + ") Wins");
  }
  if (con1 && con2 && con3 && con4 && con5) {
    DilogueBox("Game Over");
  }
}

function DilogueBox(t) {
  var box = document.querySelector(".alert-box");
  box.style.display = "flex";
  var text = document.querySelector(".text");
  text.innerHTML = t;
  var body = document.querySelector(".body");
  body.style.display = "none";
}

function PlayAgain() {
  var box = document.querySelector(".alert-box");
  box.style.display = "none";
  var body = document.querySelector(".body");
  body.style.display = "flex";
  var allButtons = document.querySelectorAll(".button");
  allButtons.forEach((element) => {
    element.textContent = "";
  });
  turn = "X";
}

function Game() {
  return (
    <div className="App">
      <div className="alert-box">
        <b className="text">GAME END</b>
        <div>
          <button onClick={PlayAgain}>Play Again</button>
          <button>
            <Link to="../">Main Menu</Link>
          </button>
        </div>
      </div>
      <div className="body">
        <div className="game-area">
          <div className="btn-row">
            <div
              className="button"
              id="btn1"
              onClick={() => {
                clickEvent("btn1");
              }}
            ></div>
            <div
              className="button"
              id="btn2"
              onClick={() => {
                clickEvent("btn2");
              }}
            ></div>
            <div
              className="button"
              id="btn3"
              onClick={() => {
                clickEvent("btn3");
              }}
            ></div>
          </div>
          <div className="btn-row">
            <div
              className="button"
              id="btn4"
              onClick={() => {
                clickEvent("btn4");
              }}
            ></div>
            <div
              className="button"
              id="btn5"
              onClick={() => {
                clickEvent("btn5");
              }}
            ></div>
            <div
              className="button"
              id="btn6"
              onClick={() => {
                clickEvent("btn6");
              }}
            ></div>
          </div>
          <div className="btn-row">
            <div
              className="button"
              id="btn7"
              onClick={() => {
                clickEvent("btn7");
              }}
            ></div>
            <div
              className="button"
              id="btn8"
              onClick={() => {
                clickEvent("btn8");
              }}
            ></div>
            <div
              className="button"
              id="btn9"
              onClick={() => {
                clickEvent("btn9");
              }}
            ></div>
          </div>
        </div>
        <img src={Image} alt="..." />
      </div>
    </div>
  );
}

export default Game;
