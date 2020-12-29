function heightadjust() {
  document.getElementById("regestrationform").style.height =
    window.innerHeight + "px";
  if (screen.height < 680) {
    document.getElementById("dash_head").style.height = inh * 0.1 + "px";
  } else {
    var inh = window.innerHeight;

    document.getElementById("dash_head").style.height = inh * 0.07 + "px";
  }
}
function re() {
  document.getElementById("regestrationform").style.height =
    window.innerHeight + "px";
  document.getElementById("personalinfo_bdy").style.height =
    window.innerHeight * 0.97 + "px";
}
document.addEventListener("DOMContentLoaded", (event) => {
  checkport(window.orientation);
});
function checkport(x) {
  if (x != 0) {
    document.getElementById("porterr").style.display = "block";
  } else {
    document.getElementById("porterr").style.display = "none";
  }
}
function openerrbox(val) {
  var x = document.getElementById("errcontainer");
  if (x.style.display == "flex") {
  } else {
    x.children[0].innerText = val;
    x.style.display = "flex";
    x.classList.add("erranimateclass");
    setTimeout(function () {
      closeerrbox();
    }, 5000);
  }
}
function closeerrbox() {
  var x = document.getElementById("errcontainer");
  x.classList.remove("erranimateclass");
  x.style.display = "none";
}
