$(document).ready(function () {
  $("#mobilenosubmitbutton").click(function () {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#email").val();
    var pincode = $("#pincode").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    var agree = $("#tandc").val();

    if (
      Validateform(fname, lname, email, pincode, password, cpassword, agree)
    ) {
      $.ajax({
        url: "/collectpersonalinfo",
        headers: { "X-CSRFToken": getcsrf() },
        type: "POST",
        crossDomain: true,
        data: {
          fname: fname,
          lname: lname,
          email: email,
          password: password,
          pincode: pincode,
        },
        success: function (data) {
          if (data.state == "1") {
            window.location.replace("/");
          } else {
            openerrbox("Invalid Data");
          }
        },
      });
    }
  });
});

function Validateform(
  fname,
  lname,
  email,
  pincode,
  password,
  cpassword,
  agree
) {
  var flag = true;
  if (fname != "") {
    $("#sbaselinefname").removeAttr("style");
    $("#lblfname").removeAttr("style");
    if (IsAlpha(fname)) {
      $("#lblfname").removeAttr("style");
      $("#sbaselinefname").removeAttr("style");
    } else {
      $("#sbaselinefname").css("background", "#ff7171");
      $("#sbaselinefname").css("width", "100%");
      $("#lblfname").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#sbaselinefname").css("background", "#ff7171");
    $("#sbaselinefname").css("width", "100%");
    $("#lblfname").css("color", "#ff7171");

    flag = false;
  }
  if (lname != "") {
    $("#sbaselinelname").removeAttr("style");
    $("#lbllname").removeAttr("style");
    if (IsAlpha(lname)) {
      $("#lbllname").removeAttr("style");
      $("#sbaselinelname").removeAttr("style");
    } else {
      $("#sbaselinelname").css("background", "#ff7171");
      $("#sbaselinelname").css("width", "100%");
      $("#lbllname").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#sbaselinelname").css("background", "#ff7171");
    $("#sbaselinelname").css("width", "100%");
    $("#lbllname").css("color", "#ff7171");

    flag = false;
  }
  if (email != "") {
    $("#sbaselineemail").removeAttr("style");
    $("#lblemail").removeAttr("style");
    if (ValidateEmail(email)) {
      $("#lblemail").removeAttr("style");
      $("#sbaselineemail").removeAttr("style");
    } else {
      $("#sbaselineemail").css("background", "#ff7171");
      $("#sbaselineemail").css("width", "100%");
      $("#lblemail").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#sbaselineemail").css("background", "#ff7171");
    $("#sbaselineemail").css("width", "100%");
    $("#lblemail").css("color", "#ff7171");

    flag = false;
  }
  if (pincode != "") {
    $("#sbaselinepincode").removeAttr("style");
    $("#lblpincode").removeAttr("style");
    if (!IsAlpha(pincode)) {
      $("#lblpincode").removeAttr("style");
      $("#sbaselinepincode").removeAttr("style");
      if (pincode.length == 6) {
        $("#lblpincode").removeAttr("style");
        $("#sbaselinepincode").removeAttr("style");
      } else {
        $("#sbaselinepincode").css("background", "#ff7171");
        $("#sbaselinepincode").css("width", "100%");
        $("#lblpincode").css("color", "#ff7171");
        flag = false;
      }
    } else {
      $("#sbaselinepincode").css("background", "#ff7171");
      $("#sbaselinepincode").css("width", "100%");
      $("#lblpincode").css("color", "#ff7171");
      flag = false;
    }
  } else {
    $("#sbaselinepincode").css("background", "#ff7171");
    $("#sbaselinepincode").css("width", "100%");
    $("#lblpincode").css("color", "#ff7171");
    flag = false;
  }
  if (password != "") {
    $("#sbaselinepassword").removeAttr("style");
    $("#lblpassword").removeAttr("style");
  } else {
    $("#sbaselinepassword").css("background", "#ff7171");
    $("#sbaselinepassword").css("width", "100%");
    $("#lblpassword").css("color", "#ff7171");

    flag = false;
  }
  if (cpassword != "") {
    $("#sbaselinecpassword").removeAttr("style");
    $("#lblcpassword").removeAttr("style");
    if (cpassword == password) {
      $("#lblcpassword").removeAttr("style");
      $("#sbaselinecpassword").removeAttr("style");
    } else {
      $("#sbaselinecpassword").css("background", "#ff7171");
      $("#sbaselinecpassword").css("width", "100%");
      $("#lblcpassword").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#sbaselinecpassword").css("background", "#ff7171");
    $("#sbaselinecpassword").css("width", "100%");
    $("#lblcpassword").css("color", "#ff7171");

    flag = false;
  }
  if (!flag) {
    openerrbox("Invalid Credentials");
  }
  return flag;
}
function ValidateEmail(x) {
  var pattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!pattern.test(x)) {
    return false;
  } else {
    return true;
  }
}
function IsAlpha(x) {
  var pattern = /^[A-Za-z]+$/;
  if (pattern.test(x)) {
    return true;
  } else {
    return false;
  }
}
