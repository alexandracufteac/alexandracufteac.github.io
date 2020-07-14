function showSecondColumn(){
    document.getElementById("reviewsSecondColumn").classList.remove('d-none');
    document.getElementById("reviewsBtn").style.display="none";
    document.getElementById("reviewsBtnHide").style.display="block";

};

function hideSecondColumn(){
    document.getElementById("reviewsSecondColumn").classList.add('d-none');
    document.getElementById("reviewsBtn").style.display="block";
    document.getElementById("reviewsBtnHide").style.display="none";
}
