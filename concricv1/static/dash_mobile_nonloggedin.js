function shopcatchange(x) {
  var base = document.getElementById("baseline");
  var shopbody = document.getElementById("shop_body");
  var lst = shopbody.querySelectorAll(".bdy");
  var c = Number(x.getAttribute("data-cat"));
  for (var i = 0; i < lst.length; i++) {
    lst[i].style.display = "none";
  }
  lst[c].style.display = "flex";
  base.style.left = c * 50 + "%";
}

function mtabchange(x) {
  var icons = document.getElementById("ftr_icons");
  var but = icons.querySelectorAll("button");
  var bdy = document.body.querySelectorAll(".dash_mobile_body");
  var logo = document.getElementById("logo");
  var tabname = document.getElementById("tabname");
  var c = Number(x.getAttribute("data-mtab"));
  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
    but[i].classList.remove("active");
    but[i].classList.add("inactive");
  }
  bdy[c].style.display = "block";
  but[c].classList.remove("inactive");
  but[c].classList.add("active");
  var b = "tabname";

  if (c == 0) {
    history.pushState(null, "explore", " ");

    logo.style.display = "flex";

    tabname.style.display = "none";
  } else {
    location.hash = x.getAttribute("data-mtabdescription");
  }
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

function openupop(x) {
  history.pushState(
    null,
    removespace(x.getAttribute("data-type").toLowerCase()),
    removespace(x.getAttribute("data-type").toLowerCase())
  );
  hashhandler4();
}
function closeupop() {
  document.getElementById("upop").style.top = "50%";
  document.getElementById("sbar").blur();
  setTimeout(function () {
    upopnone();
  }, 50);
}
function floatup() {
  document.getElementById("upop").style.top = "0%";
}
function upopnone() {
  document.getElementById("upop").style.display = "none";
}
function heightadjust() {
  var inh = window.innerHeight;

  document.getElementById("upop").style.height = window.innerHeight + "px";
  document.getElementById("uresults").style.height = window.innerHeight + "px";

  if (screen.height < 680) {
    document.getElementById("exploretab").style.height = inh * 0.92 + "px";
    document.getElementById("shoptab").style.height = inh * 0.92 + "px";

    document.getElementById("quotationtab").style.height = inh * 0.92 + "px";

    document.getElementById("sodtab").style.height = inh * 0.92 + "px";

    document.getElementById("quotationtab").style.top = inh * 0.09 + "px";
    document.getElementById("dash_head").style.height = inh * 0.1 + "px";

    document.getElementById("upophead").style.height = inh * 0.1 + "px";

    document.getElementById("dash_footer").style.height = inh * 0.1 + "px";
    document.getElementById("dash_footer").style.top = "90%";
    document.getElementById("exploretab").style.top = inh * 0.09 + "px";
    document.getElementById("shoptab").style.top = inh * 0.09 + "px";
    document.getElementById("quotationtab").style.top = inh * 0.09 + "px";
    document.getElementById("sodtab").style.top = inh * 0.09 + "px";
    document.getElementById("profiletab").style.top = inh * 0.09 + "px";
    document.getElementById("profiletab").style.height = inh * 0.95 + "px";
  } else {
    document.getElementById("exploretab").style.height = inh * 0.95 + "px";
    document.getElementById("shoptab").style.height = inh * 0.95 + "px";

    document.getElementById("quotationtab").style.height = inh * 0.95 + "px";

    document.getElementById("sodtab").style.height = inh * 0.95 + "px";

    document.getElementById("profiletab").style.height = inh + "px";

    document.getElementById("dash_head").style.height = inh * 0.08 + "px";
    document.getElementById("upophead").style.height = inh * 0.08 + "px";
    document.getElementById("dash_footer").style.height = inh * 0.08 + "px";
    document.getElementById("dash_footer").style.top = "91.9%";
    document.getElementById("exploretab").style.top = inh * 0.07 + "px";
    document.getElementById("shoptab").style.top = inh * 0.07 + "px";
    document.getElementById("quotationtab").style.top = inh * 0.07 + "px";
    document.getElementById("sodtab").style.top = inh * 0.07 + "px";
    document.getElementById("profiletab").style.top = inh * 0.07 + "px";
  }
}
function re() {
  var inh = window.innerHeight;
  document.getElementById("profiletab").style.height =
    window.innerHeight + "px";
  document.getElementById("register2").style.height = window.innerHeight + "px";
  if (window.innerHeight > screen.height * 0.8) {
    document.getElementById("profiletab").style.height = inh * +"px";
  } else {
    document.getElementById("profiletab").style.height = inh + "px";
  }
}
//search results popup
function openresults() {
  var querry = $("#sbar").val();
  history.pushState(null, "searchresults", "searchresult?s=" + querry);
  hashhandler4();
}
function closeresults() {
  document.getElementById("uresults").style.top = "50%";

  setTimeout(function () {
    downresults();
  }, 100);
}
function floatresults() {
  document.getElementById("uresults").style.top = "0%";
}
function downresults() {
  document.getElementById("uresults").style.display = "none";
}

//profile popup creator
function openprofileupop(x) {
  document.getElementById("profilepopup").style.display = "block";
  document.getElementById("profilename").innerText = x.getAttribute(
    "data-type"
  );
  var bdy = document.body.querySelectorAll(".profiletabs");
  var c = Number(x.getAttribute("data-tabno"));
  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
  }
  bdy[c].style.display = "flex";
  closeupop();
  setTimeout(function () {
    floatprofile();
  }, 1);
}
function closeprofileupop() {
  document.getElementById("profilepopup").style.top = "20%";

  setTimeout(function () {
    downprofile();
  }, 40);
}
function floatprofile() {
  document.getElementById("profilepopup").style.top = "0%";
}
function downprofile() {
  document.getElementById("profilepopup").style.display = "none";
}

/********************************onstart tab remover********** */
function closeonstart() {
  setTimeout(function () {
    closeonstart2();
  }, 1000);
}
function closeonstart2() {
  document.getElementById("onstarttab").style.opacity = "0";
  setTimeout(function () {
    closeonstart3();
  }, 1000);
}
function closeonstart3() {
  document.getElementById("onstarttab").remove();
}

/********************************erreorbox remover********** */
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

function hashtabchange() {
  var hash = location.hash;

  var icons = document.getElementById("ftr_icons");
  var but = icons.querySelectorAll("button");
  var bdy = document.body.querySelectorAll(".dash_mobile_body");
  var logo = document.getElementById("logo");
  var tabname = document.getElementById("tabname");
  if (hash == "") {
    var c = 0;
  } else if (hash == "#Quotation") {
    var c = 1;
    var newname = splithash(hash);
  } else if (hash == "#Shop") {
    var c = 2;
    var newname = splithash(hash);
  } else if (hash == "#Sod") {
    var c = 3;
    var newname = splithash(hash);
  } else if (hash == "#Profile") {
    var c = 4;
    var newname = splithash(hash);
  } else {
    return;
  }

  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
    but[i].classList.remove("active");
    but[i].classList.add("inactive");
  }
  bdy[c].style.display = "block";
  but[c].classList.remove("inactive");
  but[c].classList.add("active");

  if (c == 0) {
    logo.style.display = "flex";

    tabname.style.display = "none";
  } else {
    logo.style.display = "none";
    tabname.style.display = "flex";

    tabname.innerText = newname;
  }
}
function splithash(hash) {
  return hash.substring(1);
}
