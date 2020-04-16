var submissionData = [];

var passId = null; 

function modalFunction(id){
    debugger;
    //when modal is triggered
    passId = id;
}











function getRequest(){
    $.ajax({
        url: "https://localhost:44342/api/Form/GetForms",
        type: 'GET',
        success: function returnSubmissionsWhenSuccess(responseFromApi) { //are nevoie sa precizez o functie acolo ca sa poata procesa info din api
           submissionData = responseFromApi; // i am saving the response from the API in an object that can be used outside this ajax
            },
        complete: function loadSubmissionsFromDB(){
                  showCards(); //in order for showCards to be executed only after the submissions are done to be returned from the API
                }
    });
}


//---------called in getRequest:--------------

function showCards(){
    
    submissionData.forEach( obj => generateCard(obj.id, obj.name, obj.email, obj.dropdown, obj.priority, obj.plan, obj.message)); 
    // fiecare element din [array] submissionData e un obj
    // prin a denumi "obj" salvez submisiile intr-un obiect local (pot pune orice nume de obiect)
}


//---------called in showCards:--------------

function generateCard(id, name, email, dropdown, priority, plan, message){// sunt parameters NU Ids!! 
    //name aduce info din obj.name 
    //email aduce info din obj.email
    //dropdown aduce info din obj.dropdown and so on
    //daca inversez name cu email, atunci email o sa fie obj.name si name o sa fie obj.email
    
    var borderColor = "border-dark";
    // if(priority == "High")
    // {
    //     borderColor = "border-color: red;";
    // }
    // else if(priority == "Critical")
    // {
    //     borderColor = "border-color: maroon;";
    // }
    // else if(priority == "Medium")
    // {
    //     borderColor = "border-color: orange;";
    // }
    // else if(priority == "Low")
    // {
    //     borderColor = "border-color: yellow;";
    // }
    // else {
    //     borderColor = "border-dark"
    // }

    switch(priority){
        case "High":
            borderColor = "border-color: red;";
            break;
        case "Critical":
            borderColor = "border-color: maroon;";
            break; 
        case "Medium":
            borderColor = "border-color: orange;";
            break;
        case "Low":
            borderColor = "border-color: yellow;";
            break;
        default:
            borderColor = "border-dark";
    }

    if(plan === null || plan === undefined)
    {
        plan = "N/A";
    }

   

    document.getElementById('card').innerHTML += 
            '<div>' +
                '<span style="display: none;">'+ id + '</span>' +
                '<div class="card mb-1 mt-3" style="width: 18rem; ' + borderColor + '">' + 
                    '<div class="card-body text-dark">' + 
                        '<h5 class="card-title">' + dropdown + '</h5>' + 
                        '<h6 class="card-subtitle mb-2 text-muted">' + priority + '</h6>' + 
                        '<div class="mb-3" style="font-family: Roboto;">' +
                        '<p class="mb-0">' + name + '</p>' +
                        '<p class="mb-0">' + email + '</p>' +
                        '<p class="mb-0">' + plan + '</p>' +
                        '</div>' +
                        '<p class="card-text">' + message + '</p>' +
                    '</div>' +
                '</div>'+
                '<div style="display: inline-block;"> <button type="button" data-toggle="modal" data-target="#deleteModal"> <i class="far fa-trash-alt"></i> </button> </div>' +
                '<div style="display: inline-block;"> <button type="button" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></button> </div>'+
            '</div>'
 
}

function deleteSubmission(id){
    debugger;
     var objToDelete = {
      Id: id,
    };

    $.ajax({
      type: "DELETE",
      url: "https://localhost:44342/api/Form/DeleteForm",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      data: JSON.stringify(objToDelete),
      complete: function whatevs(){
        //location.reload();
        
      }
    });
 console.log(id);
}
        
function updateSubmission(){

    var updatedSubmission = {

    }

    $.ajax({
        type: "PUT",
        url: "https://localhost:44342/api/Form/UpdateForm",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(),
          
        });
}





//------calling the functions to execute---------
function onLoad(){
    getRequest();
}

window.onload = onLoad;





//___________________________________________________________________________________________________________________________________________

//----------------------ignore this shit--- explanations & examples----------------------------------------

// function displayDataInCard(){
//         document.getElementById("name").textContent = submissionData[3].name;
//         document.getElementById("email").textContent = submissionData[3].email;
//         document.getElementById("dropdown").textContent = submissionData[3].dropdown;
//         document.getElementById("plan").textContent = submissionData[3].plan;
//         document.getElementById("priority").textContent = submissionData[3].priority;
//         document.getElementById("message").textContent = submissionData[3].message;
// }


// function test(){
//     //fiecare element din [array] submissionData e un objects
//     submissionData.forEach( objects => console.log(objects));
// }

// sau

// submissionData.forEach(
//     function showObjects(objects){
//         console.log(objects)
//     });  



// function caca()
// {
//     submissionData.forEach(
//     function showObjects(objects){
//         console.log(objects);
//     }); 

//     submissionData.forEach(
//         function showName(objects){
//             console.log(objects.name);
//         }); 

//     submissionData.forEach(
//         function showName(objects){
//              console.log(objects.plan);
//          }); 
// }




