// criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []; //criar corinha como lista
snake[0] ={
  x: 8 * box,
  y: 8 * box
}
let direction = "right"
let food ={
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}


function criarBG(){
  context.fillStyle = "pink";
  context.fillRect(0, 0, 16*box, 16*box) //desenha o retangulo usando x e y e a largura e altura setadas
}
function criarCobrinha(){
  for(i = 0; i < snake.length; i++){
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}
function drawFood(){
  context.fillStyle = "red"
  context.fillRect(food.x, food.y, box, box)
}
//quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);

function update(event){
  if(event.keycode == 37 && direction != 'right') direction ='left'
  if(event.keycode == 38 && direction != 'down') direction ='up'
  if(event.keycode == 39 && direction != 'left') direction ='right'
  if(event.keycode == 40 && direction != 'up') direction ='down'
}

function iniciarJogo(){
  if(snake[0].x > 15*box && direction == 'right') snake[0].x = 0
  if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
  if(snake[0].y > 15*box && direction == 'down') snake[0].y = 0
  if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box
  for(i = 1; i < snake.length; i++){
    if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
      clearInterval(jogo)
      alert('Gamer Over :(')
    }
  }
}
criarBG();
criarCobrinha();
drawFood();

let snakeX = snake[0].x;
let snakeY = snake[0].y;

 if(direction == "right") snakeX += box;
 if(direction == "left") snakeX += box;
 if(direction == "up") snakeY += box;
 if(direction == "down") snakY += box;

 if(snakeX != food.x || snakeY != food.y){
    snake.pop() // pop tira o ultimo elemento da lista
 } else{
  food.x = Math.floor(Math.random() *15 +1) * box
  food.y = Math.floor(Math.random() *15 +1) * box
 }
 let newHead ={
  x: snakeX,
  y: snakeY
 }

 snake.unshift(newHead)
 let jogo = setInterval(iniciarJogo, 100)