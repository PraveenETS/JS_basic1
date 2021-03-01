function validation(){
    debugger
    var user = document.getElementById("username").value;
    var mail = document.getElementById("useremail").value;
    var mono = document.getElementById("MobileNo").value;
    var msg;
    var brk ="\r\n";
    var hobby_string = " ";
    var address = document.getElementById("myadd").value;
    // var female = document.getElementById("female").value;
    // var user = document.getElementById("username").value;
    // var user = document.getElementById("username").value;

    let status=true;
    let motu=/^[a-zA-Z ]{1,16}$/;
    let emreg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let monoreg=/^[0-9]{10}|[0-9]{12}$/;
    let gen= document.forms.gender;
    var hob= document.forms.vehicle;
    let c=0;
    let i=0;

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
    if(gen[0].checked==false && gen[1].checked==false){
        document.getElementById("egen").innerHTML="**select a gender";
        status = false;
    }
    for(i=0; i<hob.length; i++)
    {
        if(hob[i].checked==true)
        {
            c=c+1;
        }
    }
    if(c<3){
        document.getElementById("ehob").innerHTML="**select min. 3 hobbies";
        status = false;
    }
    
    
    if(status==true)
    {
        msg = "Your Form Is Submited" + brk;
        msg+= "You are: " + user;
        msg+= brk +"E-mail: " + mail;
        if(gen[0].checked==true)
        {
            msg+= brk + "Gender: Male";
        }
        else
        {
            msg+= brk + "Gender: female";
        }
        msg+= brk + "Mo. No: " + mono;

        for(i=0; i<hob.length; i++)
        {
            if(hob[i].checked==true)
            {
                hobby_string+=hob[i].value +" ";
            }
        }
        msg+= brk + "Your hobbies are: " +  hobby_string;
        msg+= brk + "Your Address is: " + brk + address;

        alert( msg ) ;
    }
   return status;
}