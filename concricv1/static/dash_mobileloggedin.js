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
  document.getElementById("sbar").blur();
  setTimeout(function () {
    afterkeydown();
  }, 100);
}
function afterkeydown() {
  document.getElementById("upop").style.top = "50%";
  setTimeout(function () {
    upopnone();
  }, 30);
}
function floatup() {
  document.getElementById("upop").style.top = "0%";
}
function upopnone() {
  document.getElementById("upop").style.display = "none";
}
function heightadjust() {
  var inh = window.innerHeight;
  document.getElementById("profilepopup").style.height =
    window.innerHeight + "px";
  document.getElementById("p_tab_head").style.height = inh * 0.07 + "px";
  document.getElementById("upop").style.height = window.innerHeight + "px";
  document.getElementById("uresults").style.height = window.innerHeight + "px";

  if (screen.height < 680) {
    document.getElementById("exploretab").style.height = inh * 0.92 + "px";
    document.getElementById("shoptab").style.height = inh * 0.92 + "px";

    document.getElementById("quotationtab").style.height = inh * 0.92 + "px";

    document.getElementById("sodtab").style.height = inh * 0.92 + "px";

    document.getElementById("quotationtab").style.top = inh * 0.09 + "px";
    document.getElementById("dash_head").style.height = inh * 0.1 + "px";
    document.getElementById("p_tab_body").style.height = inh * 0.92 + "px";
    document.getElementById("upophead").style.height = inh * 0.1 + "px";
    document.getElementById("p_tab_head").style.height = inh * 0.1 + "px";
    document.getElementById("dash_footer").style.height = inh * 0.1 + "px";
    document.getElementById("dash_footer").style.top = "90%";
    document.getElementById("exploretab").style.top = inh * 0.09 + "px";
    document.getElementById("shoptab").style.top = inh * 0.09 + "px";
    document.getElementById("quotationtab").style.top = inh * 0.09 + "px";
    document.getElementById("sodtab").style.top = inh * 0.09 + "px";
    document.getElementById("productupophead").style.height = inh * 0.09 + "px";
    document.getElementById("profiletab").style.top = inh * 0.09 + "px";
    document.getElementById("profiletab").style.height = inh * 0.92 + "px";
  } else {
    document.getElementById("exploretab").style.height = inh * 0.95 + "px";
    document.getElementById("shoptab").style.height = inh * 0.95 + "px";

    document.getElementById("quotationtab").style.height = inh * 0.95 + "px";

    document.getElementById("sodtab").style.height = inh * 0.95 + "px";

    document.getElementById("profiletab").style.height = inh * 0.95 + "px";
    document.getElementById("p_tab_body").style.height = inh * 0.95 + "px";
    document.getElementById("p_tab_head").style.height = inh * 0.08 + "px";
    document.getElementById("dash_head").style.height = inh * 0.08 + "px";
    document.getElementById("upophead").style.height = inh * 0.08 + "px";
    document.getElementById("productupophead").style.height = inh * 0.08 + "px";

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
  document.getElementById("p_tab_body").style.height =
    window.innerHeight + "px";
}
//search results popup

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
  document.getElementById("profilepopup").style.top = "0%";
  document.getElementById("profilename").innerText = x.getAttribute(
    "data-type"
  );

  location.hash = removespace(x.getAttribute("data-type")).toLowerCase();
  var bdy = document.body.querySelectorAll(".profiletabs");
  var c = Number(x.getAttribute("data-tabno"));
  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
  }
  bdy[c].style.display = "flex";
  closeupop();
}
function closeprofileupop() {
  document.getElementById("profilepopup").style.top = "100%";
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

//blackout function
function openblackout(val) {
  var ch = document.getElementById("blackout").children;
  console.log(ch);
  for (var i = 0; i < ch.length; i++) {
    ch[i].style.display = "none";
  }
  ch[val].style.display = "flex";
  document.getElementById("blackout").style.display = "flex";
}
function closeblackout() {
  document.getElementById("blackout").style.display = "none";
}
function opensucessbox(val) {
  var x = document.getElementById("errcontainer");
  x.children[0].style.border = "0.5px solid #63f646";
  x.children[0].style.color = "#63f646";
  x.children[0].style.background = "#b8f64621";
  if (x.style.display == "flex") {
  } else {
    x.children[0].innerText = val;
    x.style.display = "flex";
    x.classList.add("erranimateclass");
    setTimeout(function () {
      closesucessbox();
    }, 5000);
  }
}
function closesucessbox() {
  var x = document.getElementById("errcontainer");
  x.classList.remove("erranimateclass");
  x.children[0].removeAttribute("style");
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
function hashhandler2() {
  var hash = location.hash;
  if (hash == "#myaccount") {
    var c = 0;
    var newname = "My account";
  } else if (hash == "#orders") {
    var c = 1;
    var newname = "Orders";
  } else if (hash == "#myaddresses") {
    var c = 2;
    var newname = "My addresses";
  } else if (hash == "#settings") {
    var c = 3;
    var newname = "Settings";
  } else {
    closeprofileupop();

    return;
  }
  document.getElementById("profilepopup").style.display = "block";
  document.getElementById("profilepopup").style.top = "0%";
  document.getElementById("profilename").innerText = newname;

  var bdy = document.body.querySelectorAll(".profiletabs");

  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
  }
  bdy[c].style.display = "flex";
  closeupop();
  setTimeout(function () {
    floatprofile();
  }, 3000);
}
