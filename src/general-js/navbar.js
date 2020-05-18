function navScrollStyles(){

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("smallNav").style.backgroundColor = "darkslategray";
        document.getElementById("navContainer").style.backgroundColor = "darkslategray";
        document.getElementById("bigNav").style.paddingTop = "0";
        document.getElementById("signUpBig").style.border = "1px solid white";
        document.getElementById("loginBig").style.backgroundColor = "rgb(207, 78, 4)";

    } else {
        document.getElementById("smallNav").style.backgroundColor = "";
        document.getElementById("navContainer").style.backgroundColor = "";
        document.getElementById("bigNav").style.paddingTop = "";
        document.getElementById("signUpBig").style.border = "";
        document.getElementById("loginBig").style.backgroundColor = "";
    }
}


var menu = document.getElementById("navbarResponsive");

document.addEventListener("click", function(event) {
    //debugger;
if (event.target.classList.contains("navbar-toggler")){
    //debugger;
 menu.style.display="none";
    
}
  


});



window.onscroll = navScrollStyles; 