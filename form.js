function validation(){
    debugger
    var user = document.getElementById("username").value;
    var mail = document.getElementById("useremail").value;
    var mono = document.getElementById("MobileNo").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    // var user = document.getElementById("username").value;
    // var user = document.getElementById("username").value;

    let status=true;
    let motu=/^[a-zA-Z ]{1,16}$/;
    let emreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let monoreg=/^[0-9]{10}|[0-9]{12}$/;
    let gen="";

    if(!motu.test(user)){
        document.getElementById("ename").innerHTML="**please enter a valid name";
        status = false;
    }
    if(!emreg.test(mail)){
        document.getElementById("e_mail").innerHTML="**email not valid";
        status = false;
    }
    if(!monoreg.test(mono)){
        document.getElementById("emono").innerHTML="**please enter a valid mo. no.";
        status = false;
    }
    
   return status;
}