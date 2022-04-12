function run() {
    getCard()
}

function getCard() {
    var c = Math.floor(Math.random() * 1) + 1
    finalProject.getElementById("card").innerHTML = "<img src=images/2D.jpg>"
}