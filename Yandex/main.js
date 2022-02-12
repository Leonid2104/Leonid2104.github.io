window.onload = function() {
  size = [30, 40, 50]
  {/*let button = document.querySelectorAll('.btn')
  let i = 0;
  button.forEach(elem =>{
    elem.style.backgroundColor = i % 2 === 0 ? 'white' : 'red'
    i++
  }
  )
  setInterval(function(){
    button.forEach(elem =>{
      elem.classList.toggle('')
  })
  },1000)
  console.log(button)*/}
  
  let startBtn = document.querySelector('.startBtn')
  let button = document.querySelector('.btn')
  let size_y = button.parentNode.clientHeight
  let size_x = button.parentNode.clientWidth
  startBtn.addEventListener('click', game)
  button.addEventListener('click', newGoal)


  size = [15, 20, 25]
  function game(){
    let numb = Math.random() * 2
    let sizeBtn = size[Math.trunc(numb+0.5)]
    button.classList.remove('non')
    button.style.height = `${sizeBtn}px`
    button.style.width = `${sizeBtn}px`

    let top = Math.trunc(Math.random() * (size_y - sizeBtn) + 0.5)
    let left = Math.trunc(Math.random() * (size_x - sizeBtn) + 0.5)

    button.style.top = `${top}px`
    button.style.left = `${left}px`

    console.log(size_y)
    console.log(size_x)
    console.log(sizeBtn)
    console.log(button)
  }

  function newGoal(){
    button.classList.add('non')
    game()
  }
  
}