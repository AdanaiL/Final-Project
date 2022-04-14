function run() {
    getCard()
    computer()
}

var usertotal = 0

function getCard() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    usertotal = usertotal + r 
    alert(`${usertotal}`)
}

function computer() {
    var r = Math.floor(Math.random() * 10) + 1
    var suitArray = ["C", "D", "H", "S"]
    var randomSuit = Math.floor(Math.random() * 4)
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>")
    do {
        var r = ranN()
        var pcnum = Math.floor(pcnum + r);
        alert(`The new number is ${r}. The computer total is ${pcnum}`);
    } while (pcnum < 16)
    return pcnum
}




