var whoAreYouHoe = prompt("Who you bitch?");
var whyNoBuyBitch = prompt("Why you no buy yet bitch?");
var feedback = document.getElementById("feedback");

function giveFeedback() {
    
    feedback.textContent = "Hey yo " + whoAreYouHoe + ", so you are not buying because \"" + whyNoBuyBitch + "\" huh?! Well then fuck you!";
}