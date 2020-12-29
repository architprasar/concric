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
  if (c == 0) {
    logo.style.display = "flex";
    document.getElementById("explractive").style.display = "block";
    document.getElementById("explrinactive").style.display = "none";
    tabname.style.display = "none";
  } else {
    logo.style.display = "none";
    tabname.style.display = "flex";
    tabname.innerText = x.getAttribute("data-mtabdescription");
    document.getElementById("explractive").style.display = "none";
    document.getElementById("explrinactive").style.display = "block";
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
  var parent = document.getElementById("ubody");
  var bdy = parent.children;

  var c = Number(x.getAttribute("data-tabno"));
  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
  }
  bdy[c].style.display = "flex";
  var utitle = document.getElementById("utabname");
  var usearch = document.getElementById("utabsearch");
  var uicon = document.getElementById("utabicons");
  document.getElementById("upop").style.display = "flex";
  if (x.getAttribute("data-type") != "Search") {
    utitle.style.display = "flex";
    usearch.style.display = "none";
    uicon.style.display = "flex";
    document.getElementById("utabname").innerText = x.getAttribute("data-type");
  } else {
    utitle.style.display = "none";
    uicon.style.display = "none";
    usearch.style.display = "flex";
    usearch.style.width = "90%";
    document.getElementById("sbar").focus();
  }
  setTimeout(function () {
    floatup();
  }, 1);
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
  document.getElementById("profilepopup").style.height =
    window.innerHeight + "px";
  document.getElementById("p_tab_head").style.height = inh * 0.07 + "px";
  document.getElementById("upop").style.height = window.innerHeight + "px";
  document.getElementById("uresults").style.height = window.innerHeight + "px";
  document.getElementById("dash_head").style.height = inh * 0.07 + "px";
  document.getElementById("dash_footer").style.height = inh * 0.08 + "px";
  document.getElementById("dash_footer").style.height = inh * 0.08 + "px";
  document.getElementById("exploretab").style.height = inh * 0.95 + "px";
  document.getElementById("shoptab").style.height = inh * 0.95 + "px";
  document.getElementById("exploretab").style.top = inh * 0.07 + "px";
  document.getElementById("shoptab").style.top = inh * 0.07 + "px";
  document.getElementById("quotationtab").style.height = inh * 0.95 + "px";
  document.getElementById("quotationtab").style.top = inh * 0.07 + "px";
  document.getElementById("sodtab").style.height = inh * 0.95 + "px";
  document.getElementById("sodtab").style.top = inh * 0.07 + "px";
  document.getElementById("profiletab").style.height = inh * 0.95 + "px";
  document.getElementById("profiletab").style.top = inh * 0.07 + "px";
}
function re() {
  document.getElementById("profilepopup").style.height =
    window.innerHeight + "px";
  document.getElementById("register").style.height = window.innerHeight + "px";
  document.getElementById("login").style.height = window.innerHeight + "px";
}
//search results popup
function openresults() {
  document.getElementById("uresults").style.display = "flex";
  closeupop();
  setTimeout(function () {
    floatresults();
  }, 1);
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

//product card creator
function productcard(
  id,
  p_name = "xyz",
  p_description = "xyz",
  p_prize = 00,
  p_bot = "50% off"
) {
  //***************************image is yet to be added *********************
  var bdy = document.getElementById(id);
  var card = document.createElement("div");
  card.setAttribute("class", "product_card");
  var img = document.createElement("div");
  img.setAttribute("class", "img_holder");
  var desc = document.createElement("div");
  desc.setAttribute("class", "desc");
  card.appendChild(img);

  var name = document.createElement("div");
  name.setAttribute("class", "name");
  name.innerText = p_name; //**************************name input
  var description = document.createElement("div");
  description.setAttribute("class", "description");
  description.innerText = p_description; //**************************description input
  var prize = document.createElement("div");
  prize.setAttribute("class", "price");
  var bot = document.createElement("div");
  bot.setAttribute("class", "bot");
  bot.innerText = p_bot; /********************************bottom input********** */
  var p1 = document.createElement("p");
  p1.innerHTML = "&#x20B9;";
  prize.appendChild(p1);
  var p2 = document.createElement("p");
  p2.innerText = p_prize; //price adds on from here
  prize.appendChild(p2);

  desc.appendChild(name);
  desc.appendChild(description);
  desc.appendChild(prize);
  desc.appendChild(bot);

  card.appendChild(desc);
  bdy.appendChild(card);
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
