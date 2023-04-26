const gameBoard = document.querySelector("#game-board");
const scoreDisplay = document.querySelector("#score");
const fruits = ["images/apple.png" ,"images/muz.png"];
let score = 0;
let fruitsCollected = 0;
function collectFruit(event) {
  event.target.remove();
  score += 1;
  fruitsCollected++;
  scoreDisplay.textContent = `Score: ${score}`;
  if (fruitsCollected === 20) {
    scoreDisplay.textContent = `Score: ${score}`;
    alert("TEBRİKLERR KAZANDIN");
    resetGame();
  }
}

// Klavye hareketleri
document.addEventListener("keydown", handleKeyDown);

function moveFruits(dx, dy) {
  for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  fruit.x += dx;
  fruit.y += dy;
  }
  }
  function handleKeyDown(e) {
    // Yön tuşları ile hareket
    if (e.keyCode === 37) { // Sol tuş
      moveFruits(-10, 0);
    }
    if (e.keyCode === 38) { // Yukarı tuş
      moveFruits(0, -10);
    }
    if (e.keyCode === 39) { // Sağ tuş
      moveFruits(10, 0);
    }
    if (e.keyCode === 40) { // Aşağı tuş
      moveFruits(0, 10);
      }
      // Space tuşu ile meyve toplama
  if (e.keyCode === 32) { // Space tuşu
    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      if (isColliding(fruit, getPlayer())) {
        score++;
        fruits.splice(i, 1);
        fruitsCollected++;
        break;
      }
    }
  }
  }

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
