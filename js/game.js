const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")

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
    
  }


}, 10)

document.addEventListener("keydown", marioJump)