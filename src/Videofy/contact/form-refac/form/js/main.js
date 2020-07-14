//---------------API information:
const baseUrl = "Todo"





//---------------Form fields functions

//dropdown
const problemReport = "Problem Report";
const featureRequest = "Feature Request";
const other = "Other";

//priorities
const priorityLow = "Low";
const priorityMedium = "Medium";
const priorityHigh = "High";
const priorityCritical = "Critical"

//radio - plans
const freePlanVal = "Free";
const essentialsPlanVal = "Essentials";
const professionalPlanVal = "Professional";


function getSelectedDropdown(){
    var dropdown = document.getElementById("dropdown");
    var selectedVal = dropdown.options[dropdown.selectedIndex].value;
    return selectedVal;
}

function getSelectedRadio(){
    var freePlan = document.getElementById('freePlan');
    var essentialsPlan = document.getElementById('essentialsPlan');
    var professionalPlan = document.getElementById('professionalPlan');

    if(freePlan.checked){
        return freePlan.value;
    }
    else if (essentialsPlan.checked){
        return essentialsPlan.value;
    }
    else if (professionalPlan.checked){
        return professionalPlan.value;
    }
}


function showRadio(){
    var radio = document.getElementById("radioField");

    if (getSelectedDropdown() === problemReport){
        radio.style.display = 'block';
    } else if (getSelectedDropdown() !==  problemReport){
        radio.style.display = 'none';
    }
}

function changePriority(){
   
    if (getSelectedDropdown() === problemReport && getSelectedRadio() === professionalPlanVal) {
        document.getElementById("priorityInput").value = priorityCritical;
        document.getElementById("form").style.borderColor = "maroon"
    }
    else if(getSelectedDropdown() === problemReport && getSelectedRadio() === essentialsPlanVal){
        document.getElementById("priorityInput").value = priorityHigh;
        document.getElementById("form").style.borderColor = "red";
    }
    else if (getSelectedDropdown() === problemReport && getSelectedRadio() === freePlanVal){
        document.getElementById("priorityInput").value = priorityMedium;
        document.getElementById("form").style.borderColor = "orange";
    }
    else if(getSelectedDropdown() === featureRequest){
        document.getElementById("priorityInput").value = priorityLow;
        document.getElementById("form").style.borderColor = "yellow";
    }
    else if(getSelectedDropdown() === other){
        document.getElementById("priorityInput").value = priorityMedium;
        document.getElementById("form").style.borderColor = "orange";
    }

    
}



//-------------------------------On-click functions

//--Submit button:


function createObjectSubmittedInfo(){

    var submittedInfo = {
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        dropdown: document.getElementById('dropdown').value,
        plan: getSelectedRadio(),
        priority: document.getElementById('priorityInput').value,
        message: document.getElementById('messageInput').value
    }

    return submittedInfo;
}

function redirect() {
    
     window.location = "./../html/thankyou.html"; 
}


function sendData(){
    $.ajax({
            type: "POST",
            url: "https://localhost:44342/api/Form/CreateForm", //<-- asta e api = asta e toata usa = asta poate fi folosit de oricine si chiar de marius sa trimita pornosaguri
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(createObjectSubmittedInfo()),
            error: function (xhr) {
                console.log(xhr);
            },
            complete: function(){
                redirect();
            }
        });
}


function submitFormBtn() {
    setSessionStorage();
    sendData();
    }



//--Reset button:

function resetFormBtn(){
    document.getElementById("form").reset();

}


function setSessionStorage(){
    sessionStorage.setItem("name", document.getElementById('nameInput').value);
}



// -----------------------------onLoad/onChange called functions:

// !!! must be at the end of the document to execute!!!


function onLoad(){
    changePriority();
    showRadio();
}


function onChange(){
    changePriority();
    showRadio();
}



window.onload = onLoad;
window.onchange = onChange;





