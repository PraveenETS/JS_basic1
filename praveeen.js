(function () {
    document.getElementById("submitForm").onsubmit = function(e) {
        e.preventDefault(); // prevent to reload the page after submit
        if(!validation())
            return false;
        
        // if(validation())
        //     document.getElementById("submitForm").reset();
       
        // location.reload();
    };

    function validation(){
    
        var user = document.getElementById("username").value;
        user = user.trim();
        var mail = document.getElementById("useremail").value;
        var gender_value="";
        var mono = document.getElementById("MobileNo").value;
        var msg;
        var brk ="\r\n";
        var hobby_string = "";
        var address = document.getElementById("myadd").value;
        address = address.trim();

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
        
        if (address == '') {
            document.getElementById("eAddress").innerHTML="**please enter your address";
            status = false;

        }
        if(status==true)
        {
            msg = "Your Form Is Submited" + brk;
            msg+= "You are: " + user;
            msg+= brk +"E-mail: " + mail;
            if(gen[0].checked==true)
            {
                gender_value="Male";
                msg+= brk + "Gender: "+ gender_value;
            }
            else if(gen[1].checked==true)
            {
                gender_value="Female";
                msg+= brk + "Gender: "+gender_value;
            }
            else{
                gender_value="";
            }
            
            msg+= brk + "Mo. No: " + mono;

            for(i=0; i<hob.length; i++)
            {
                if(hob[i].checked==true)
                {
                    hobby_string+=hob[i].value +", ";
                }
            }
            msg+= brk + "Your hobbies are: " +  hobby_string;
            msg+= brk + "Your Address is: " + brk + address;

            alert( msg ) ;
        }
       
        if(status == true){
            let pod=document.getElementsByClassName("error");
            for(let i=0; i<pod.length; i++)
                {
                    pod[i].innerHTML="";
                }
            // document.getElementById("ename").innerHTML='';
            // document.getElementById("eAddress").innerHTML='';
            // document.getElementById("ehob").innerHTML='';
            // document.getElementById("egen").innerHTML='';
            // document.getElementById("emono").innerHTML='';
            // document.getElementById("e_mail").innerHTML='';
            document.getElementById("submitForm").reset();
        }

        if(status==true)
        {
            // var sql=0;
            // sql+=1;
            var row=document.getElementById("myTable").insertRow(-1);
            // row.insertCell(0).innerHTML=sql;
            row.insertCell(0).innerHTML=user;
            row.insertCell(1).innerHTML=mail;
            row.insertCell(2).innerHTML=gender_value;
            row.insertCell(3).innerHTML=mono;
            row.insertCell(4).innerHTML=hobby_string;
            row.insertCell(5).innerHTML=address;
        }
    
    return status;
    }
})();    