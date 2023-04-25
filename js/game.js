const mario = document.querySelector("#mario")

const jump = () =>{
  mario.classList.add("jump")

  setInterval(() => {
    mario.classList.remove("jump")
  }, 700)
}

window.addEventListener("keydown", jump)