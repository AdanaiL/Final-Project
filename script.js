function run() {
    getCard()
    compareNum()
    
}
function comp() {
    computer()
}

var usertotal = 0
var pctotal = 0

function getCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    var user = document.getElementById("user")
    usertotal = usertotal + r
    user.innerHTML = "User total is " + usertotal
    user.style.color = "white"
    user.style.textAlign = "center"
    return usertotal
}

function computer() {
    do {
        var r = Math.floor(Math.random() * 10) + 1
        var suitArray = ["C", "D", "H", "S"]
        var randomSuit = Math.floor(Math.random() * 4)
        document.getElementById("computer").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
        var computer = document.getElementById("pc")
        pctotal = pctotal + r
        computer.innerHTML = "Computer total is " + pctotal
        computer.style.color = "white"
        computer.style.textAlign = "center"
    } while (pctotal < 16)
    return pctotal
    
}

function resetPage() {
    window.location.reload()
}

function compareNum() {
    if ((pctotal > 20) && ( usertotal > 20)) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You all lose"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    } else if (usertotal > 20) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You lose, Computer Wins"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    } else if (pctotal > 20) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "Computer loses, You win"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    } else if (pctotal > usertotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "Computer wins"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    } else if (usertotal > pctotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You win"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    } else if (usertotal == pctotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You tied"
        compare.style.color = "white"
        compare.style.textAlign = "center"
    }
}
