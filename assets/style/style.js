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
var x = document.getElementById("profileholder").style.width ;
  if (x == "350px"){
  document.getElementById("profileholder").style.width = "0%";
document.getElementById("profileholder").style.height = "0%";
  }
  else{
   document.getElementById("profileholder").style.width = "350px";
document.getElementById("profileholder").style.height = "450px";

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


