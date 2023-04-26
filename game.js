
const canvasWidth = 1920;
const canvasHeight = 1080;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const fruitImages = [
	{ src: "../images/fruits/apple.png", width: 90, height: 90 },
	{ src: "../images/fruits/muz.png", width: 80, height: 80 },
	{ src: "../images/fruits/orange.png", width: 100, height: 100 },
];

let score = 0;
let fruitsCollected = 0;
let gameRunning = true;
let fruits = [];
canvas.width = canvasWidth;
canvas.height = canvasHeight;
document.addEventListener("keydown", handleKeyDown);
canvas.addEventListener("mousedown", handleMouseDown);
setInterval(gameLoop, 1000/60);

function gameLoop() {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	for (let i = 0; i < fruits.length; i++) {
		const fruit = fruits[i];
		ctx.drawImage(fruit.image, fruit.x, fruit.y, fruit.width, fruit.height);
	}

	document.getElementById("scoreDiv").innerText = "Score: " + score + " / " + fruitsCollected;

	// Yeni meyve oluşturma
	if (fruits.length < 10 && Math.random() < 0.05) {
		const fruitImage = fruitImages[Math.floor(Math.random() * fruitImages.length)];
		fruits.push({
			image: new Image(),
			x: Math.random() * (canvasWidth - fruitImage.width),
			y: Math.random() * (canvasHeight - fruitImage.height),
			width: fruitImage.width,
			height: fruitImage.height
		});
		fruits[fruits.length - 1].image.src = fruitImage.src;
	}


	if (score >= 20) {
		gameRunning = false;
        gameOver();
          
	}
}

function handleKeyDown(e) {
	// Yön tuşları ile hareket
	if (e.keyCode === 37) { 
		moveFruits(-20, 0);
	}
	if (e.keyCode === 38) { 
		moveFruits(0, -20);
	}
	if (e.keyCode === 39) { 
		moveFruits(20, 0);
	}
	if (e.keyCode === 40) { 
		moveFruits(0, 20);
    }

}

function handleMouseDown(e) {
// Fare tıklaması ile meyve toplama
for (let i = 0; i < fruits.length; i++) {
const fruit = fruits[i];
if (isColliding(fruit, { x: e.offsetX, y: e.offsetY, width: 1, height: 1 })) {
score++;
fruits.splice(i, 1);
fruitsCollected++;
break;
}
}
}

function moveFruits(dx, dy) {
for (let i = 0; i < fruits.length; i++) {
const fruit = fruits[i];
fruit.x += dx;
fruit.y += dy;
}
}

function getPlayer() {
return {
x: canvasWidth / 2 - 25,
y: canvasHeight / 2 - 25,
width: 50,
height: 50
};
}

function gameOver() {
    document.getElementById("game-over").innerHTML = "Tebrikler! Oyunu kazandınız!";
  }
  

function isColliding(obj1, obj2) {
return (
obj1.x < obj2.x + obj2.width &&
obj1.x + obj1.width > obj2.x &&
obj1.y < obj2.y + obj2.height &&
obj1.y + obj1.height > obj2.y
);
}
