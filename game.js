function playround(playerSelection, computerSelection){
  if ((playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")){
    return "Won"
  }else if (playerSelection === computerSelection){
    return "Tie"
  }else {
    return "Lost"
  }
}

function game(){
  let points = 0
  let roundsPlayed = 0
  const three = ['Rock','Paper','Scissors']
  window.addEventListener('click', roundOne)
  window.addEventListener('click', addHighlight)

  const buttons = document.querySelectorAll(".box")
  buttons.forEach(button => button.addEventListener("transitionend", removeHighlight))

  function addHighlight(e){
    if (e.target.className !== 'box') return
    e.target.classList.add('selection')
  }
  function removeHighlight(e){
    e.target.classList.remove('selection')
  }

  function roundOne(e){
    if (e.target.className !== 'box') return
    const playerSelection = e.target.id
    const computerSelection = three[Math.floor(Math.random() * three.length)]
    let result = playround(playerSelection, computerSelection)
    roundsPlayed += 1
    const show = document.querySelector('.show')


    if (result === "Won"){
      points += 1
    }
    show.textContent = `You: ${playerSelection} - Computer: ${computerSelection}\r\n`
    show.textContent += `${result} ${points}/5 \r\n`

    if (roundsPlayed === 5){
      totalPoints(points)
      const body = document.querySelector('body')
      const restartButton = document.createElement('button')
      restartButton.textContent = "Play again!"
      restartButton.setAttribute('onClick', 'window.location.reload()')
      body.appendChild(restartButton)
    }
  }


  function totalPoints(points){
    const show = document.querySelector('.show')
    const h = document.createElement('h2')
    if (points >= 3){
      h.textContent = "Game over, you won!"
      show.appendChild(h)
    }else{
      h.textContent = "Game over, you lost :("
      show.appendChild(h)
    }
  }

}

game()
