var obj = [];

function getRequest(){
    $.ajax({
        url: "https://localhost:44342/api/Form/GetForms",
        type: 'GET',
        success: function(res) {
           obj = res;
            console.log(res);
        }
    });
}



function persName(){
    document.getElementById("nameThankYou").innerHTML = sessionStorage.getItem("name");
}

window.onload = persName;