let saveEl = document.getElementById("save-el")
let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")
let homeCount = 0
let guestCount = 0


function homeOne() {
    homeCount += 1
    countHome.textContent = homeCount
}

function homeTwo() {
    homeCount += 2
    countHome.textContent = homeCount
}

function homeThree() {
    homeCount += 3
    countHome.textContent = homeCount
}

function guestOne() {
    guestCount += 1
    countGuest.textContent = guestCount
}

function guestTwo() {
    guestCount += 2
    countGuest.textContent = guestCount
}

function guestThree() {
    guestCount += 3
    countGuest.textContent = guestCount
}

function newGame() {
    countGuest.textContent = 0
    countHome.textContent = 0
    homeCount = 0
    guestCount = 0
}
