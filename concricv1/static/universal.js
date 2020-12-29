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

function productcardeditor(p_name, p_company, p_price) {
  document.getElementById("product_card_product_name").innerText = p_name;
  document.getElementById("product_card_product_company").innerText = p_company;
  document.getElementById("product_card_product_price").innerText = p_price;
  document.getElementById("product_popup_name").innerText = p_name;
}
//product card creator
function productcard(
  id,
  p_name = "xyz",
  p_description = "xyz",
  p_prize = 00,
  p_bot = "50% off",
  productcode
) {
  //***************************image is yet to be added *********************
  var bdy = document.getElementById(id);
  var card = document.createElement("div");
  card.setAttribute("class", "product_card");
  var funct = "Productpopupopen('" + productcode + "')";
  card.setAttribute("onclick", funct);
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
  bot.innerText =
    p_bot + "%"; /********************************bottom input********** */
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
function Productpopupopen(x) {
  document.getElementById("productdisplaypopup").style.top = "0%";
  history.pushState(null, "product", "product?p=" + x);
  productsajax();
}
function Productpopupclose() {
  document.getElementById("productdisplaypopup").style.top = "100%";
}

function hashhandler4() {
  var hash = window.location;

  $.ajax({
    url: hash,
    headers: { "X-CSRFToken": getcsrf() },
    type: "POST",
    crossDomain: true,
    success: function (data) {
      ajaxtabhandler(data.tab);
      hashhandler3(data.tab);
    },

    error: function () {
      openerrbox("Server error");
    },
  });
}

function ajaxtabhandler(tab) {
  if (tab == "2") {
    document.getElementById("uresults").style.display = "flex";
  } else {
    Productpopupclose();
    hashtabchange();
    closeresults();
    return;
  }
  Productpopupclose();
  setTimeout(function () {
    floatresults();
  }, 1);
}

function hashhandler3(tab) {
  if (tab == "srch") {
    var c = 0;
    var newname = "Search";
  } else if (tab == "arc") {
    var c = 1;
    var newname = "Architect";
  } else if (tab == "li") {
    var c = 2;
    var newname = "Liked Items";
  } else if (tab == "crt") {
    var c = 3;
    var newname = "Cart";
  } else {
    closeupop();
    
    return;
  }
  var parent = document.getElementById("ubody");
  var bdy = parent.children;
  document.title = newname;
  for (var i = 0; i < bdy.length; i++) {
    bdy[i].style.display = "none";
  }
  bdy[c].style.display = "flex";
  var utitle = document.getElementById("utabname");
  var usearch = document.getElementById("utabsearch");
  var uicon = document.getElementById("utabicons");
  document.getElementById("upop").style.display = "flex";
  if (c != 0) {
    utitle.style.display = "flex";
    usearch.style.display = "none";
    uicon.style.display = "flex";
    document.getElementById("utabname").innerText = newname;
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

function removespace(str) {
  var len = str.length;
  var nstr = "";
  for (var i = 0; i < len; i++) {
    if (str[i] != " ") {
      nstr += str[i];
    }
  }
  return nstr;
}

//search result popup
function openresults() {
  var querry = "concric";
  querry = $("#sbar").val();
  history.pushState(
    { p: 0 },
    "searchresult?s=" + querry,
    "searchresult?s=" + querry
  );
  document.title = querry;
  hashhandler4();
}

function productsajax() {
  var loc = window.location;

  $.ajax({
    url: loc,
    headers: { "X-CSRFToken": getcsrf() },
    type: "POST",
    crossDomain: true,

    success: function (data) {
      productcardeditor(data.name, data.company, data.mrp);
      document.title = data.name;
    },

    error: function () {
      openerrbox("Server error");
    },
  });
}
