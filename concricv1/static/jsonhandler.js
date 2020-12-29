$(document).ready(function () {
  $("#mobilenosubmitbutton").click(function () {
    var mobileno = $("#myaccountphoneno").val();
    if (mobileno.length != 10) {
      $("#sbaseline").css("background", "#ff7171");
      $("#sbaseline").css("width", "100%");
      $("#lblphoneno").css("color", "#ff7171");
      openerrbox("Invalid phone no");
    } else {
      $.ajax({
        url: "/registerphone",
        headers: { "X-CSRFToken": getcsrf() },
        type: "POST",
        crossDomain: true,
        data: { phoneno: mobileno },
        success: function (data) {
          if (data.state == "1") {
            document.getElementById("respondedphoneno").innerText =
              data.phoneno;
            $("#otpinputcontainer").css("height", "auto");
            $("#myaccountphoneno").attr("disabled", "disabled");
            $("#sbaseline").css("background", "#4691f6");
            $("#sbaseline").removeAttr("style");
            $("#lblphoneno").css("color", "#4691f6");
            $("#verifyotp").css("height", "auto");
            $("#mobilenosubmit").css("display", "none");
          } else {
            $("#sbaseline").css("background", "#ff7171");
            $("#sbaseline").css("width", "100%");
            $("#lblphoneno").css("color", "#ff7171");
            openerrbox("User already exist");
          }
        },
        error: function () {
          openerrbox("Server Error");
        },
      });
    }
  });
  $("#verifyotpbutton").click(function () {
    var otp = $("#otp").val();
    if (otp.length != 6) {
      $("#sbaselineotp").css("background", "#ff7171");
      $("#sbaselineotp").css("width", "100%");
      $("#lblotp").css("color", "#ff7171");
      openerrbox("Invalid Otp");
    } else {
      $("#sbaselineotp").removeAttr("style");
      $("#lblotp").removeAttr("style");
      $.ajax({
        url: "/verifyotp",
        headers: { "X-CSRFToken": getcsrf() },
        type: "POST",
        crossDomain: true,
        data: { otp: otp },
        success: function (data) {
          window.location.replace("/personalinfo");
        },
        error: function () {
          openerrbox("Server Error");
        },
      });
    }
  });
  $("#mobilenosubmitbuttonlogin").click(function () {
    var phoneno = $("#myaccountphonenologin").val();
    var password = $("#myaccountpasswordlogin").val();
    if (!validatelogin(phoneno, password)) {
    } else {
      $.ajax({
        url: "/accountlogin",
        headers: { "X-CSRFToken": getcsrf() },
        type: "POST",
        crossDomain: true,
        data: {
          phoneno: phoneno,
          password: password,
        },
        success: function (data) {
          if (data.state == "1") {
            window.location.replace("/");
          } else {
            if (data.state == "7") {
              $("#sbaselineloginpassword").css("background", "#ff7171");
              $("#sbaselineloginpassword").css("width", "100%");
              $("#lblloginpassword").css("color", "#ff7171");
              $("#myaccountpasswordlogin").val("");
              openerrbox("Invalid password");
            } else {
              $("#sbaselineloginphoneno").css("background", "#ff7171");
              $("#sbaselineloginphoneno").css("width", "100%");
              $("#lblloginphoneno").css("color", "#ff7171");
              $("#myaccountpasswordlogin").val("");
              openerrbox("User not found");
            }
          }
        },
        error: function () {
          openerrbox("Server Error");
        },
      });
    }
  });
});
function validatelogin(phoneno, password) {
  var flag = true;

  if (phoneno == "" || phoneno.length != 10) {
    $("#sbaselineloginphoneno").css("background", "#ff7171");
    $("#sbaselineloginphoneno").css("width", "100%");
    $("#lblloginphoneno").css("color", "#ff7171");

    flag = false;
  } else {
    $("#sbaselineloginphoneno").removeAttr("style");
    $("#lblloginphoneno").removeAttr("style");
  }
  if (password == "") {
    $("#sbaselineloginpassword").css("background", "#ff7171");
    $("#sbaselineloginpassword").css("width", "100%");
    $("#lblloginpassword").css("color", "#ff7171");

    flag = false;
  } else {
    $("#sbaselineloginpassword").removeAttr("style");
    $("#lblloginpassword").removeAttr("style");
  }
  if (!flag) {
    openerrbox("Invalid credentials");
  }
  return flag;
}

function openregister() {
  document.getElementById("register").style.display = "block";
  document.getElementById("login").style.display = "none";
}
function openlogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("register").style.display = "none";
}
