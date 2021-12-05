const cards =document.querySelectorAll(".card")
for (const card of cards){
  card.addEventListener('click',() => {
    console.log(1)
    clearActive()
    card.classList.add('active')
  })
}

function clearActive () {
  cards.forEach((card)=>{
    card.classList.remove('active')
  })
}