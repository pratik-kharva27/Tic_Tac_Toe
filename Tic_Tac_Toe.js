let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".restart");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const restart = () => {
  turnO = true;
  enableBox();
  msgContainer.classList.add("hide");
};

function checkDraw() {
  if (!gameState.board.includes(null)) {
    alert("It's a draw!");
    disableBox();
  }
}


boxes.forEach((box) => {
  box.addEventListener("click", (event) => {
    
    if (turnO === true) {
      //player O
      box.innerHTML = "O";
      turnO = false;
    } else {
      // player X
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner: ${winner}`;
  msgContainer.classList.remove("hide");
  disableBox();
};

const checkwinner = () => {
  for (let pattern of win) {
    console.log(pattern);


    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }

};

newGamebtn.addEventListener("click", restart);
resetbtn.addEventListener("click", restart);
