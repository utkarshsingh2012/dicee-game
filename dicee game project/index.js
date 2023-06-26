
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1) + 1;
console.log(randomNumber1);

var randomDiceImage = "dice"+randomNumber1+".png";
var randonImageSource = "images/"+randomDiceImage;
document.getElementsByClassName("img1")[0].setAttribute(src, randomDiceImage);
document.getElementsByClassName("img2")[0].setAttribute(src, randomDiceImage);