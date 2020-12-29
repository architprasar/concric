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

    tabname.style.display = "none";
  } else {
    logo.style.display = "none";
    tabname.style.display = "flex";
    tabname.innerText = x.getAttribute("data-mtabdescription");
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

function reco_productcard(
  id,
  p_name = "xyz",
  p_description = "x",
  p_prize = 00,
  p_bot = "50% off"
) {
  //***************************image is yet to be added *********************
  var bdy = document.getElementById(id);
  var card_holder = document.createElement("div");
  card_holder.setAttribute("class", "product_reco_card_holder");
  var card = document.createElement("div");
  card.setAttribute("class", "reco_product_card");

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
  card_holder.appendChild(card);
  bdy.appendChild(card_holder);
}

function reco_productcard(
  id,
  p_name = "xyz",
  p_description = "x",
  p_prize = 00,
  p_bot = "50% off"
) {
  //***************************image is yet to be added *********************
  var bdy = document.getElementById(id);
  var card_holder = document.createElement("div");
  card_holder.setAttribute("class", "product_reco_card_holder");
  var card = document.createElement("div");
  card.setAttribute("class", "reco_product_card");

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
  card_holder.appendChild(card);
  bdy.appendChild(card_holder);
}

function productcardeditor(p_name, p_company = "Acc") {
  p_price = 800;
  document.getElementById("product_card_product_name").innerText = p_name;
  document.getElementById("product_card_product_company").innerText = p_company;
  document.getElementById("product_card_product_price").innerText = p_price;
}

function seller_card_creator(id, seller_name, seller_price, seller_loc) {
  var bdy = document.getElementById(id);
  var card_holder = document.createElement("div");
  card_holder.setAttribute("class", "sellercard");
  var img_holder = document.createElement("div"); //imageholder
  img_holder.setAttribute("class", "img_seller");
  card_holder.appendChild(img_holder);
  var detail_holder = document.createElement("div"); //detailholder
  detail_holder.setAttribute("class", "seller_details");
  var parent_holder = document.createElement("div"); //parentholder
  parent_holder.setAttribute("class", "parent_holder");

  var holder1 = document.createElement("div"); //SELLER name holder
  holder1.setAttribute("class", "holders");
  parent_holder.appendChild(holder1);
  holder1.innerText = seller_name;
  var holder2 = document.createElement("div"); //SELLER price holder
  holder2.setAttribute("class", "holders");
  holder2.innerText = "Selling at: ";
  var em = document.createElement("em");
  em.setAttribute("class", "price_sellers");
  var rupeesign = "&nbsp;&#x20B9;";
  em.innerHTML = rupeesign;
  em.innerText = em.innerText + seller_price;
  holder2.appendChild(em);
  parent_holder.appendChild(holder2);
  var holder3 = document.createElement("div"); //SELLER place holder
  holder3.setAttribute("class", "holders");
  var svglocation = document.createElement("div"); //SELLER place svg holder
  svglocation.setAttribute("class", "svg");
  var location_svg =
    " <svg  viewBox='0 0 20 20'>" +
    " <path" +
    " d='M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z'" +
    "  ></path>" +
    "  <path" +
    "    d='M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z'" +
    "  ></path>" +
    "</svg>";
  svglocation.innerHTML = location_svg;
  var location = document.createElement("p");
  location.innerText = seller_loc; //location input

  holder3.appendChild(svglocation);
  holder3.appendChild(location);
  parent_holder.appendChild(holder3);
  detail_holder.appendChild(parent_holder);

  //verified
  var verified_seller = document.createElement("div"); //verifiedholder
  verified_seller.setAttribute("class", "verified_seller");
  var svg_container = document.createElement("div"); //verifiedsvgholder
  svg_container.setAttribute("class", "svg_container");
  var svg =
    " <svg class='svg-icon' viewBox='0 0 20 20'>" +
    "<path" +
    "  d='M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z'" +
    "  ></path>" +
    "</svg>";
  svg_container.innerHTML = svg;
  verified_seller.appendChild(svg_container);
  var verified_title = document.createElement("div"); //verifiedtitelholder
  verified_title.setAttribute("class", "verified_title");
  verified_title.innerText = "Verified seller";
  verified_seller.appendChild(verified_title);
  detail_holder.appendChild(verified_seller);
  card_holder.appendChild(detail_holder);

  bdy.appendChild(card_holder);
}
