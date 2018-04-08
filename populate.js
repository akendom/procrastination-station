var randXAdd = Math.floor(Math.random()*50)+1;
var randYAdd = Math.floor(Math.random()*50)+1;
var resultAdd = randXAdd + randYAdd;
var randXMult = Math.floor(Math.random()*10)+1;
var randYMult = Math.floor(Math.random()*15)+1;
var resultMult = randXMult * randYMult;
var randXExp = Math.floor(Math.random()*10)+1;
var randNExp = Math.floor(Math.random()*5);
var resultExp = Math.pow(randXExp, randNExp);
var timeLeft = 30;
var elem = document.getElementById('clocky');
var timerId = setInterval(countdown, 1000);


function onLoad(){
  document.getElementById("question1").innerHTML = "What is the result of " + randXMult + " times " + randYMult+ "?";
  document.getElementById("question2").innerHTML = "What is the result of " + randXAdd + " + " + randYAdd+ "?";
  document.getElementById("question3").innerHTML = "What is the result of " + randXExp + " to the power of " + randNExp+ "?";


}

function countdown() {
  if (timeLeft == 0) {
    
randXAdd = Math.floor(Math.random()*50)+1;
randYAdd = Math.floor(Math.random()*50)+1;
resultAdd = randXAdd + randYAdd;
randXMult = Math.floor(Math.random()*10)+1;
randYMult = Math.floor(Math.random()*15)+1;
resultMult = randXMult * randYMult;
randXExp = Math.floor(Math.random()*10)+1;
randNExp = Math.floor(Math.random()*2);
resultExp = Math.pow(randXExp, randNExp);
    
    onLoad();
    timeLeft = 30;
  } else {
    elem.innerHTML = timeLeft + ' seconds remaining';
    timeLeft--;
  }
}

function toFacebook() {
  var userInput1 = document.getElementById('userInput1').value;
  var userInput2 = document.getElementById('userInput2').value;
  var userInput3 = document.getElementById('userInput3').value;
  if ((userInput1 == resultMult) && (userInput2 == resultAdd)&& (userInput3 == resultExp)){
    window.location = "https://facebook.com";
    alert("Have fun!")
        }
    else{
      alert("WROOOONNNGG!");
         }
 }