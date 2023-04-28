const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")

const startBtn = document.querySelector(".start-btn")
const restartBtn = document.querySelector(".restart-btn")

const gameStart = document.querySelector(".game-start")
const gameRestart = document.querySelector(".game-restart")
const gameOver = document.querySelector(".game-over")

const newScore = document.querySelector("#new-score")

const Start = () => {
  mario.classList.remove("hide")
  pipe.classList.remove("hide")
  clouds.classList.remove("hide")
  gameStart.classList.add("hide")
}

const marioJump = () =>{
  mario.classList.add("jump")

  setTimeout(() => mario.classList.remove("jump"), 500)
}

const gameLoop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''))
  
  if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 78){

    pipe.style.animation = 'none'
    clouds.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    clouds.style.left = `${cloudsPosition}px`

    mario.setAttribute("src", "./img/game-over.webp")
    mario.style.height= '90px'
    mario.style.left= `${pipePosition - 20}px`
    mario.style.bottom= `${marioPosition}px`
    gameOver.classList.remove("hide")

  }
}, 10)


document.addEventListener("keydown", marioJump)
startBtn.addEventListener("click", Start)
restartBtn.addEventListener("click", Start)