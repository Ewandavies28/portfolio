var randomNumber1 =  Math.floor(Math.random() * (7 - 1) + 1);

document.getElementById("img1").src="images/dice" + randomNumber1 + ".png";

var randomNumber2 =  Math.floor(Math.random() * (7 - 1) + 1);

document.getElementById("img2").src="images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
    var h2 = document.querySelector("h2");
    h2.innerHTML = 'Player 1 Wins!';
}
if (randomNumber1 < randomNumber2) {
    var h2 = document.querySelector("h2");
    h2.innerHTML = 'Player 2 Wins!';
}
if (randomNumber1 == randomNumber2) {
    var h2 = document.querySelector("h2");
    h2.innerHTML = 'Its a draw roll again!';
}

function refreshPage(){
    window.location.reload();
} 