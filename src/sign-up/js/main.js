function createSignUpUser(){
    
var signUpInfo = {
    firstName: document.getElementById("signUpFormFName").value,
    lastName: document.getElementById("signUpFormLName").value,
    email: document.getElementById("signUpFormEmail").value,
    password: document.getElementById("signUpFormPassword").value,
    reenterPassword: document.getElementById("signUpFormReEnterPassword").value,
    ageConfirmation: document.getElementById("signUpFormAge").checked,
    agreement: document.getElementById("signUpFormAgree").checked
};

console.log(signUpInfo);
}

var capsLock = $("#capslockSign").hide();

document.addEventListener('keydown', function (event) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
    if (caps) {
        capsLock.show();
        }
    if (!caps) {
        capsLock.hide();
        }
});