const gameBoard = document.querySelector("#game-board");
const scoreDisplay = document.querySelector("#score");
const fruits = ["images/apple.png" ,
                "images/orange.png" ,
                "images/muz.png"];

let score = 0;
let fruitsCollected = 0;

function createFruit() {
  const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
  const fruit = document.createElement("img");
  fruit.setAttribute("src", `${randomFruit}`);
  fruit.setAttribute("alt", randomFruit);
  fruit.setAttribute("class", "fruit");
  fruit.style.left = `${Math.floor(Math.random() * 500) + 50}px`;
  fruit.style.top = `${Math.floor(Math.random() * 500) + 50}px`;
  fruit.addEventListener("click", collectFruit);
  return fruit;
}


function collectFruit(event) {
  event.target.remove();
  score += 1;
  fruitsCollected++;
  scoreDisplay.textContent = `Score: ${score}`;
  if (fruitsCollected === 20) {
    scoreDisplay.textContent = `Score: ${score}`;
    alert("Kazandınız!");
    resetGame();
  }
}

function resetGame() {
  score = 0;
  fruitsCollected = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  gameBoard.innerHTML = "";
  startGame();
}

function addFruitToBoard() {
  const fruit = createFruit();
  gameBoard.appendChild(fruit);
  setTimeout(addFruitToBoard, 1000);
}

function startGame() {
  addFruitToBoard();
}

startGame();
