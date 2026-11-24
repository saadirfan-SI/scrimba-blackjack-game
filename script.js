let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")


function startGame() {
    renderGame()
}


function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } 
    else if(sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }
    else {
        message = "You're out of the game!" 
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    let card = 6
    sum += card
    cards.push(card)
    console.log(card)
    renderGame()
}
