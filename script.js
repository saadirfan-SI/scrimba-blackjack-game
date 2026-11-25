
// Game state variables
let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false
let message = ""

// References to HTML elements used to update the game interface
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

// Object containing the player's information
let player = {
    name : "Saad",
    chips : 200
}

// Display the player's name and static chip balance
playerEl.textContent = player.name + ": $" + player.chips 


// Generate a random card using simplified Blackjack rules
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    // Assign a value of 11 to an ace and 10 to face cards
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
        return 10
    } else {
        return randomNumber
    }
}


// Handle starting a round and resetting completed rounds
function startGame() {

    // Only start a new round if the current round is not active
    if (hasBlackjack || !isAlive) {

        // Initialise the state for a fresh round
        isAlive = true
        hasBlackjack = false

        // Generate two starting cards
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()

        // Replace the previous cards and total
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard

        // Update the game interface
        renderGame()
    }
}


// Update the displayed cards, total and game status
function renderGame() {

    // Clear the previously displayed cards before rendering
    cardsEl.textContent = "Cards: "

    // Loop through the array and display every card
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // Display the current card total
    sumEl.textContent = "Sum: " + sum

    // Evaluate the total and determine the outcome of the round
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

    // Display the appropriate game status message
    messageEl.textContent = message
}


// Draw an additional card during an active round
function newCard() {

    // Prevent card draws before starting, after losing,
    // or after getting Blackjack
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard()

        // Update the total and store the newly drawn card
        sum += card
        cards.push(card)

        // Log the generated card for debugging
        console.log(card)

        // Update the interface and evaluate the new total
        renderGame()
    } 
}
