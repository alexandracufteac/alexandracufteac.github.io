var randomName = ["Nathalie Emmanuel", "Peter Dinklage", "Ellen Page", "Billie Eilish", "Joaquin Phoenix", "Sia Furler", "Madelaine Petsch", "Venus Williams", "Joan Jett"];
var randomEmail = ["vegan1@celebrity.com","vegan2@celebrity.com","vegan3@celebrity.com","vegan4@celebrity.com","vegan5@celebrity.com"];
var randomDropdown = ["Problem Report", "Feature Request", "Other"];
var randomPlan = ["Free", "Essentials", "Professional"];
var randomPriority = ["Low", "Medium", "High", "Critical"];
var randomMessage = ["Lorem ipsum dolor sit amet.", 
"Lorem, ipsum dolor.",
"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
"Lorem ipsum dolor sit amet consectetur.",
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, vero!"];



function randomizer(array){

    return Math.floor((Math.random() * array.length - 1 ) + 1);

}

function generateRandomCard(){




// document.getElementsByClassName("dropdownRandomCard")[0].innerHTML = randomDropdown[randomIndexDropdown];
// document.getElementsByClassName("dropdownRandomCard")[1].innerHTML = randomDropdown[randomIndexDropdown];
// document.getElementById("priorityRandomCard").innerHTML = randomPriority[randomIndexPriority];
document.getElementById("nameRandomCard").innerHTML = randomName[randomizer(randomName)];
// document.getElementById("emailRandomCard").innerHTML = randomEmail[randomIndexEmail];
// document.getElementById("planRandomCard").innerHTML = randomPlan[randomIndexPlan];
// document.getElementById("messageRandomCard").innerHTML = randomMessage[randomIndexMessage];

};

function createCard(){
    var divCard = document.getElementById("cacat");

}

function constructCard(){
var firstDiv = document.createElement("DIV");
firstDiv.setAttribute("mb-5");

var secondDiv = document.createElement("DIV");
secondDiv.setAttribute("card mb-1 mt-3");
secondDiv.style ="width: 18rem;";

var thirdDiv = document.createElement("DIV");
thirdDiv.setAttribute("card-body text-dark");

//h5
//h6

var fourthDiv = document.createElement("DIV");
fourthDiv.setAttribute("mb-3"); 
fourthDiv.style="font-family: Roboto;";
//p
//p
//p

//p
}

<div class="mb-5"> 
<div class="card mb-1 mt-3" style="width: 18rem;">
  <div class="card-body text-dark">
      <h5 class="card-title dropdownRandomCard"></h5> 
      <h6 class="card-subtitle mb-2 text-muted" id="priorityRandomCard"></h6>
    <div class="mb-3" style="font-family: Roboto;">
      <p class="mb-0" id="nameRandomCard"></p>
      <p class="mb-0" id="emailRandomCard"></p>
      <p class="mb-0" id="planRandomCard"></p> 
    </div>
      <p class="card-text" id="messageRandomCard"></p>
  </div> 
</div>
</div>

