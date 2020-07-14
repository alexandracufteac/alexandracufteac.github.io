//------1. Guess the answer --- while loop

var question1 = prompt("Where do we go now?");

while(question1 !== "nowhere" && question1 !== "we stay here"){
    var question1 = prompt("Where do we go now?");
}

alert("Okay!");

//while(false && true) -> if one of the conditions is true but the other false, it means the whole statement is not true so it doesn't execute while
//while(false || true) -> if one of the conditions is true it executes while

//for loop is for iteration of elements = "pentru fiecare i care e ... da-mi i-uri care sunt......"

//------2. Your lucky number generator --- for loop

var question2 = prompt("Tell me your name");
var results = [];

for(var i = question2.length; i <= question2.length + 15; i+=3){
    results.push(i);
}

var luckyNum = Math.random() * results.length * results[1];

alert("Your lucky number is: " + Math.round(luckyNum));


//-------3. How many people love you? ----- forEach

var nrPeopleLove = 0;

results.forEach(getTotal);

function getTotal(number){
   nrPeopleLove += number;
};

alert("Do you want to know how many people love you?");
alert(nrPeopleLove + " people love you! Wow!");
