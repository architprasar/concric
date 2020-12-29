function opennav(){
var x = document.getElementById("drop").style.width ;
  if (x == "32%"){
  document.getElementById("drop").style.width = "0%";
document.getElementById("drop").style.height = "0%";
  }
  else{
   document.getElementById("drop").style.width = "32%";
document.getElementById("drop").style.height = "70%";

  }

}


function pn(){
var x = document.getElementById("profileholder").style.height ;
  if (x == "170px"){
  document.getElementById("ico").classList.add('fa-angle-down');
   document.getElementById("ico").classList.remove('fa-angle-up');
document.getElementById("profileholder").style.visibility = "hidden";
document.getElementById("profileholder").style.height = "0%";
  }
  else{
  document.getElementById("ico").classList.add('fa-angle-up');
  document.getElementById("ico").classList.remove('fa-angle-down');
document.getElementById("profileholder").style.visibility = "visible";
document.getElementById("profileholder").style.height = "170px";

  }

}


function opensnav(){
var x = document.getElementById("drops").style.width ;
  if (x == "350px"){
  document.getElementById("drops").style.width = "0%";
document.getElementById("drops").style.height = "0%";
  }
  else{
   document.getElementById("drops").style.width = "350px";
document.getElementById("drops").style.height = "450px";

  }

}

function opennav2(y){
var x = document.getElementById("drop2").style.height ;
  if (x == "60%"){
  document.getElementById("drop2").style.height = "0%";
y.classList.remove("change");
  }
  else{
   document.getElementById("drop2").style.height = "60%";
y.classList.add("change");
  }

}

function myFunction(x) {
  x.classList.add("change");
}


function opennav3(){
var x = document.getElementById("drop2").style.height ;
  if (x == "80%"){
  document.getElementById("drop2").style.height = "0%";

  }
  else{
   document.getElementById("drop2").style.height = "80%";

  }

}


function Validate() {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("cpassword").value;
        var n = password.length;
        if (n<8) {
          document.getElementById("password").style.border = "1px solid red";
            alert("Password should be at least 8 characters long");

            return false;
        }
        else if (password != confirmPassword)
            {
            document.getElementById("password").style.border = "1px solid red";
            document.getElementById("cpassword").style.border = "1px solid red";
            alert("Password does not match to its confirmation");


            return false;
            }
            document.getElementById("password").style.border = "2px solid #0099e6";
            document.getElementById("cpassword").style.border = "2px solid #0099e6";
        return true;
    }


function p_menue(y){


   if(document.getElementById("p_menue").style.display != "none"){
   document.getElementById("p_menue").style.display = "none";
   y.classList.remove("p_change");
}
else{
y.classList.add("p_change");
document.getElementById("p_menue").style.display = "block";
}





}



function opentab(evt, tab) {


    if(tab == "profile"){
        document.getElementById("p").style.height = "0px";
    document.getElementById("c").style.top = "0px";
    }
     else{
        if(document.getElementById("p").style.height == "0px"){
        document.getElementById("p").style.height = "150px";
    document.getElementById("c").style.top= "150px";
    }
    }

  var i, tabcontent, tablinks;


  tabcontent = document.getElementsByClassName("p_main");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("but");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }


  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("p_menue").style.display = "none";
   document.getElementById("bar").classList.remove("p_change");
}


function openedit(){

document.getElementById("edit").style.height = "100%";
document.getElementById("edit").style.display = "block";
}
 function closeedit(){
 document.getElementById("edit").style.height = "0%";
document.getElementById("edit").style.display = "none";
 }



 function close_address_add(){
 document.getElementById("address_add").style.height = "0%";
document.getElementById("address_add").style.display = "none";
 }
 function open_address_add(){
 document.getElementById("address_add").style.height = "100%";
document.getElementById("address_add").style.display = "block";
 }


  function close_address_edit(){
 document.getElementById("address_edit").style.height = "0%";
 document.getElementById("address_edit").style.display = "none";
 }
 function open_address_edit(){
  document.getElementById("address_edit").style.display = "block";
 document.getElementById("address_edit").style.height = "100%";

 }
