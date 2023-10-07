function  formValidate(){
    var userName = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("pass").value;

    var error = document.getElementById("error");

    var text = "";
    if (email.indexOf("@") == -1) {
        text = "Please Enter a Valid Email";
        error.innerHTML = text;
        return false;}
   else if (userName.length < 3) {
    text = "Please Enter a Valid Name";
    error.innerHTML = text;
    return false;
    }else if (isNaN(phone)||phone.length<11) {
    text = "Please Enter a Valid phone";
    error.innerHTML = text;
    return false;
    } 
    else if (pass.length < 9) {
        text = "Please Enter a Valid pass";
        error.innerHTML = text;
        return false;
        }
    else {
    alert("Done");
    return true;
    }
    }