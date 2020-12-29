$(document).ready(function () {
  $.ajax({
    url: "/accountdata",
    headers: { "X-CSRFToken": getcsrf() },
    type: "POST",
    crossDomain: true,
    success: function (data) {
      document.getElementById("user__name").innerText = data.fname;
      $("#myaccountfname").val(data.fname);
      $("#myaccountlname").val(data.lname);
      $("#myaccountemail").val(data.email);
      $("#p_edit_image").attr("src", data.image);
      $("#p_account_image").attr("src", data.image);
      $("#myaccountpincode").val(data.pincode);
      $("#c_edit_image").attr("src", data.coverimage);
      $("#c_account_image").attr("src", data.coverimage);
      var products = JSON.parse(data.product);
      console.log(products);
      var len = products.length;
      for (var i = 0; i < len - 1; i++) {
        productcard(
          "search_results_body",
          products[i].fields.Product_name,
          products[i].fields.Product_company,
          products[i].fields.Product_mrp,
          products[i].fields.Product_salepercentage,
          products[i].fields.Product_code
        );
      }
    },

    error: function () {
      openerrbox("Server error");
    },
  });
});

$(document).ready(function () {
  $("#pimagesave").click(function () {
    $("#pimagesave").css("color", "#ccc");
    var fd = new FormData();
    fd.append("file", $("#pimagefile").prop("files")[0]);

    $.ajax({
      url: "/pimage",
      headers: { "X-CSRFToken": getcsrf() },
      type: "POST",
      contentType: "multipart/form-data",
      contentType: false,
      processData: false,
      data: fd,
      beforeSubmit: function () {
        $("#pimagefile").css("display", "none");
        $("#camera").css("display", "none");
      },
      success: function (data) {
        if (data.status == "1") {
          opensucessbox("Uploaded Sucessfully");
          $("#p_account_image").attr("src", data.img);
          $("#p_edit_image").attr("src", data.img);
          $("#pimagesave").removeAttr("style");
        } else {
          openerrbox("Action Forbidden");
        }
      },
      uploadProgress: function (event, position, total, percentComplete) {},
      error: function () {
        openerrbox("Server error");
        $("#pimagefile").removeAttr("style");
        $("camera").removeAttr("style");
      },
    });
  });
  $("#myaccountdatasave").click(function () {
    var fname = $("#myaccountfname").val();
    var lname = $("#myaccountlname").val();
    var pincode = $("#myaccountpincode").val();
    var email = $("#myaccountemail").val();
    if (validatemyaccountdata(fname, lname, pincode, email)) {
      $.ajax({
        url: "/accountdataupdate",
        headers: { "X-CSRFToken": getcsrf() },
        type: "POST",
        crossDomain: true,
        data: {
          fname: fname,
          lname: lname,
          email: email,
          pincode: pincode,
        },
        success: function (data) {
          if (data.state == "1") {
            opensucessbox("Data Saved!");
            document.getElementById("user__name").innerText = data.fname;
            $("#myaccountfname").val(data.fname);
            $("#myaccountlname").val(data.lname);
            $("#myaccountpincode").val(data.pincode);
            $("#myaccountemail").val(data.email);
          } else {
            openerrbox("Invalid Data");
          }
        },
      });
    } else {
      openerrbox("Invalid credentials");
    }
  });
});

function validatemyaccountdata(fname, lname, pincode, email) {
  var flag = true;
  if (fname != "") {
    $("#myaccountfnamebaseline").removeAttr("style");
    $("#myaccountfnamelbl").removeAttr("style");
    if (IsAlpha(fname)) {
      $("#myaccountfnamelbl").removeAttr("style");
      $("#myaccountfnamebaseline").removeAttr("style");
    } else {
      $("#myaccountfnamebaseline").css("background", "#ff7171");
      $("#myaccountfnamebaseline").css("width", "100%");
      $("#myaccountfnamelbl").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#myaccountfnamebaseline").css("background", "#ff7171");
    $("#myaccountfnamebaseline").css("width", "100%");
    $("#myaccountfnamelbl").css("color", "#ff7171");

    flag = false;
  }
  if (lname != "") {
    $("#myaccountlnamebaseline").removeAttr("style");
    $("#myaccountlnamelbl").removeAttr("style");
    if (IsAlpha(lname)) {
      $("#myaccountlnamelbl").removeAttr("style");
      $("#myaccountlnamebaseline").removeAttr("style");
    } else {
      $("#myaccountlnamebaseline").css("background", "#ff7171");
      $("#myaccountlnamebaseline").css("width", "100%");
      $("#myaccountlnamelbl").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#myaccountlnamebaseline").css("background", "#ff7171");
    $("#myaccountlnamebaseline").css("width", "100%");
    $("#myaccountlnamelbl").css("color", "#ff7171");

    flag = false;
  }
  if (email != "") {
    $("#myaccountemailbaseline").removeAttr("style");
    $("#myaccountemaillbl").removeAttr("style");
    if (ValidateEmail(email)) {
      $("#myaccountemaillbl").removeAttr("style");
      $("#myaccountemailbaseline").removeAttr("style");
    } else {
      $("#myaccountemailbaseline").css("background", "#ff7171");
      $("#myaccountemailbaseline").css("width", "100%");
      $("#myaccountemaillbl").css("color", "#ff7171");

      flag = false;
    }
  } else {
    $("#myaccountemailbaseline").css("background", "#ff7171");
    $("#myaccountemailbaseline").css("width", "100%");
    $("#myaccountemaillbl").css("color", "#ff7171");

    flag = false;
  }
  if (pincode != "") {
    $("#myaccountpincodebaseline").removeAttr("style");
    $("#myaccountpincodelbl").removeAttr("style");
    if (!IsAlpha(pincode)) {
      $("#myaccountpincodelbl").removeAttr("style");
      $("#myaccountpincodebaseline").removeAttr("style");
      if (pincode.length == 6) {
        $("#myaccountpincodelbl").removeAttr("style");
        $("#myaccountpincodebaseline").removeAttr("style");
      } else {
        $("#myaccountpincodebaseline").css("background", "#ff7171");
        $("#myaccountpincodebaseline").css("width", "100%");
        $("#myaccountpincodelbl").css("color", "#ff7171");
        flag = false;
      }
    } else {
      $("#myaccountpincodebaseline").css("background", "#ff7171");
      $("#myaccountpincodebaseline").css("width", "100%");
      $("#myaccountpincodelbl").css("color", "#ff7171");
      flag = false;
    }
  } else {
    $("#myaccountpincodebaseline").css("background", "#ff7171");
    $("#myaccountpincodebaseline").css("width", "100%");
    $("#myaccountpincodelbl").css("color", "#ff7171");
    flag = false;
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

$(document).ready(function () {
  $("#cimagesave").click(function () {
    $("#cimagesave").css("color", "#ccc");
    var fd = new FormData();
    fd.append("file", $("#cimagefile").prop("files")[0]);

    $.ajax({
      url: "/cimage",
      headers: { "X-CSRFToken": getcsrf() },
      type: "POST",
      contentType: "multipart/form-data",
      contentType: false,
      processData: false,
      data: fd,
      beforeSubmit: function () {
        $("#cimagefile").css("display", "none");
        $("#cameracover").css("display", "none");
      },
      success: function (data) {
        if (data.status == "1") {
          opensucessbox("Uploaded Sucessfully");
          $("#c_account_image").attr("src", data.img);
          $("#c_edit_image").attr("src", data.img);
          $("#cimagesave").removeAttr("style");
        } else {
          openerrbox("Action forbidden");
        }
      },
      uploadProgress: function (event, position, total, percentComplete) {},
      error: function () {
        openerrbox("Server error");
        $("#pimagefile").removeAttr("style");
        $("camera").removeAttr("style");
      },
    });
  });
});
