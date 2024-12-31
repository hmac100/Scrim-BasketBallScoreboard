let homeOne = document.getElementById("home-increment-one")
let homeTwo = document.getElementById("home-increment-two")
let homeThree = document.getElementById("home-increment-three")

let guestOne = document.getElementById("guest-increment-one")
let guestTwo = document.getElementById("guest-increment-two")
let guestThree = document.getElementById("guest-increment-three")

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let newGame = document.getElementById("newgame")

let homeCount= 0;
let guestCount= 0;


// HOME
function homePlusOne(){
    homeCount += 1
    homeScore.textContent = homeCount
console.log(homeCount)
}

function homePlusTwo(){
    homeCount += 2
    homeScore.textContent = homeCount
console.log(homeCount)
}

function homePlusThree(){
    homeCount += 3
     homeScore.textContent = homeCount
console.log(homeCount)
}

//GUEST
function guestPlusOne(){
   guestCount += 1
    guestScore.textContent = guestCount
console.log(guestCount)
}

function guestPlusTwo(){
   guestCount += 2
    guestScore.textContent = guestCount
console.log(guestCount)
}

function guestPlusThree(){
   guestCount += 3
    guestScore.textContent = guestCount
console.log(guestCount)
}

function newGameStart(){
    homeScore.textContent = 0
    homeCount = 0
    guestScore.textContent = 0
    guestCount = 0
}