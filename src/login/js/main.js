function readLoginInfo(){
    var submittedLoginInfo = {
        email: document.getElementById('loginFormEmail').value,
        password: document.getElementById('loginFormPassword').value
    }

    return submittedLoginInfo;
}

function verifyCredentials(){
    

    var correctInfo = {
        email: "test@test.com",
        password: "eir"
    }

    var loginInfo = readLoginInfo(); //loginInfo therefore becomes an object too

    if(correctInfo.email === loginInfo.email && correctInfo.password === loginInfo.password){
        console.log("dis is gud");
    } else if(correctInfo.email !== loginInfo.email && correctInfo.password === loginInfo.password || 
        correctInfo.email === loginInfo.email && correctInfo.password !== loginInfo.password){
            console.log("fraier")
        } else if(correctInfo.email !== loginInfo.email && correctInfo.password !== loginInfo.password){
            console.log("meri ma d'aci")
        }
}

//de pus erorile pe interfata 