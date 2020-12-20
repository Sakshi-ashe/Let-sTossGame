var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 ++; 

randomNumber1=  Math.floor(randomNumber1);
var newimg1 = "images/dice" + randomNumber1 +".png";
document.getElementsByClassName("img1")[0].setAttribute("src",newimg1);

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 ++; 

randomNumber2 =  Math.floor(randomNumber2);
var newimg2 = "images/dice" + randomNumber2 +".png";
document.getElementsByClassName("img2")[0].setAttribute("src",newimg2);

if(randomNumber2 > randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 win 🚩!";
}

else if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 win!";
}

else{
    document.getElementsByTagName("h1")[0].innerHTML = "🚩 Draw ! 🚩";
}