var diceImgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
function pattern() {
  return (Math.floor(Math.random()*5) + 1);
}
var x = pattern();
var y = pattern();

function rollDice1() {
return document.querySelector("img.img1").setAttribute("src", diceImgArray[x]);
}
function rollDice2() {
return document.querySelector("img.img2").setAttribute("src", diceImgArray[y]);
}
function changeHeading() {
 if (x > y) {
   document.querySelector("h1").textContent = "Player 1 wins!";
 } else if (y > x) {
   document.querySelector("h1").textContent = "Player 2 wins!";
 }

}



rollDice1();
rollDice2();
changeHeading();
