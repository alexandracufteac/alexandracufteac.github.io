var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');

//.value for text in an input
//.innerHTML for any content between the tags of an html element (but not for inputs)
//.innerText for paragraphs, headers etc, strictly the text between two tags

//onclick function will not work on input type submit 

var form = document.getElementById('xIsWhatPercentOfY');

//"submit" below is a reserved keyword! the form will listen for the submit event
//addEventListener cannot be added to the button directly, but to the form containing
//the button

form.addEventListener('submit', function(event) {

    if (!numField1.value || !numField2.value) {
        alert("Please enter the numbers");
    } else {
        var x = parseFloat(numField1.value); //parseFloat to transform string into float num
        var y = parseFloat(numField2.value);
        //always make sure to define values as numbers, by default they are strings
        
        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Answer:" + percent + "%";
        event.preventDefault(); //use whenever you need to prevent html from doing smth it does by default
    }

})



