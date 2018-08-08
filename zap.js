////////////////////MAKE ALL
function triggerEventOnPage(selector, eventName, memo) {
  ///////////////////////////abrir detalhes
  var event;
  var element = document.querySelector(selector);

  event = document.createEvent("Event");
  event.initEvent(eventName, true, true);
  event.memo = memo || {};

  element.dispatchEvent(event);
  /////////////////////nomes
  var nomes = [];
  //pega nome
  var nomes = document.querySelectorAll(
    "#app > div > div > div.MZIyP > div._3q4NP._2yeJ5 > span > div > span > div > div > div > div._1CRb5._34vig._3XgGT > div:nth-child(3) > span > span"
  );
  console.log("var nomes " + nomes);
  var nome = [].slice.call(nomes);
  if (nome[0] !== undefined && nome[0].innerText !== "") {
    //tem nome?
    var nome0 = nome[0].innerText;
    console.log("entrou no 1if " + nome0);
  } else {
    var nomes = document.querySelectorAll(
      "#app > div > div > div.MZIyP > div._3q4NP._2yeJ5 > span > div > span > div > div > div > div._1CRb5._34vig._3XgGT > span > span"
    );
    var nome = [].slice.call(nomes);
    if (nome[0] !== undefined) {
      var nome0 = nome[0].innerText;
    } else {
      var nome0 = "NOME?";
      console.log("entrou no else " + nome0);
    }
  }
  /////////////////////////////////////////////// pegar numeros tel
  var numeros = [];

  var numeros = document.querySelectorAll(
    "#app > div > div > div.MZIyP > div._3q4NP._2yeJ5 > span > div > span > div > div > div > div:nth-child(4) > div:nth-child(3) > div > div > span > span"
  );
  var numero = [].slice.call(numeros);
  if (numero[0] != null) {
    var numero0 = numero[0].innerHTML.replace(/([-[\] {}()*?.\\^$|#,])/g, "");
    console.log("entrou no if " + numero0);
  } else {
    var numeros = document.querySelectorAll(
      "#app > div > div > div.MZIyP > div._3q4NP._2yeJ5 > span > div > span > div > div > div > div:nth-child(4) > div._14oqx > div > div > span > span"
    );
    var numero = [].slice.call(numeros);
    if (numero[0] == null) {
      var numero0 = "null";
    } else {
      var numero0 = numero[0].innerHTML.replace(/([-[\]{}() *?.\\^$|#,])/g, "");
      console.log("entrou no else " + numero0);
    }
  }
  var numeroNome = nome0 +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "\t" +
    "* myContacts" +
    "\t" +
    "\t" +
    "'" +
    numero0;
  const el = document.createElement("textarea");
  el.value = numeroNome;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  console.log(numeroNome);
  document.body.removeChild(el);
}

///////////// creates button
function addActivateBtn() {
  var body = document.getElementsByTagName("body")[0];
  var startBtnDiv = document.createElement("div");
  startBtnDiv.innerHTML = '<div class="titleText">Details<br>&<br>Copy</div>';
  startBtnDiv.id = "btn";
  startBtnDiv.addEventListener("click", function(e) {
    triggerEventOnPage("#main > header > div._18tv-", "click");

    //////////// scroll contacts
    function pageScroll() {
      document.querySelector("#pane-side").scrollBy(0, 72);
    }
    pageScroll();
  });

  var style = "";
  style +=
    "#btn { height: 59px; width: 59px; background-color: #09d261;  ";
  style +=
    "position: fixed; top: 0px; left: 105px; z-index: 99999; }";
  style +=
    "#btn:hover { left: 100px; background-color: #1cef78; height: 70px; width: 70px; cursor: pointer;}";
  style +=
    "#btn .titleText {font-weight: 200; text-align: center; font-size: 14px; padding-top: 10px; color: white;}";
    style +=
    "#btn:hover .titleText {font-weight: 500; font-size: 15px;padding-top: 12px;}";
  var styleEl = document.createElement("style");
  styleEl.innerHTML = style;
  body.appendChild(startBtnDiv);
  body.appendChild(styleEl);
}

addActivateBtn();
