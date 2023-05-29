const cardArray = [
    {
        name: "brain",
        img: "./images/brain.svg",
    },
    {
        name: "check-file",
        img: "./images/check-file.svg",
    },
    {
        name: "dev-ops",
        img: "./images/dev-ops.svg",
    },
    {
        name: "heart",
        img: "./images/heart.svg",
    },
    {
        name: "robot",
        img: "./images/robot.svg",
    },
    {
        name: "stock-ticker",
        img: "./images/stock-ticker.svg",
    },
    {
        name: "brain",
        img: "./images/brain.svg",
    },
    {
        name: "check-file",
        img: "./images/check-file.svg",
    },
    {
        name: "dev-ops",
        img: "./images/dev-ops.svg",
    },
    {
        name: "heart",
        img: "./images/heart.svg",
    },
    {
        name: "robot",
        img: "./images/robot.svg",
    },
    {
        name: "stock-ticker",
        img: "./images/stock-ticker.svg",
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grindDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen = []
let cardsChosenId = []
const cardsFail = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/code.svg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grindDisplay.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute("src", "./images/code.svg")
        cards[optionTwoId].setAttribute("src", "./images/code.svg")
        alert("You have clicked the same image!")
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "./images/Untitled.png")
        cards[optionTwoId].setAttribute("src", "./images/Untitled.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "./images/code.svg")
        cards[optionTwoId].setAttribute("src", "./images/code.svg")
        cardsFail.push(+1)
        console.log("Add to Fail")
        console.log(cardsFail)
        alert("Sorry try again!")
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if (cardsFail.length === 4) {
        alert("You lost, try again!")
        location.reload()
    }

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = "Congratulations you found them all!"
    }
}

function flipCard() {
   const cardId = this.getAttribute("data-id")
   cardsChosen.push(cardArray[cardId].name)
   this.setAttribute("src", cardArray[cardId].img)
   cardsChosenId.push(cardId)
   //console.log(cardsChosen)
   //console.log(cardsChosenId)
   if (cardsChosen.length === 2) {
    setTimeout( checkMatch, 500);
   }
}