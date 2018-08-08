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

/////////////cria botao
function addActivateBtn() {
  var body = document.getElementsByTagName("body")[0];
  var startBtnDiv = document.createElement("div");
  startBtnDiv.innerHTML = '<div class="titleText">Copiar</div>';
  startBtnDiv.id = "btnOpenWhatsAllApp";
  startBtnDiv.addEventListener("click", function(e) {
    triggerEventOnPage("#main > header > div._18tv-", "click");

    ////////////rola a pagina de contato
    function pageScroll() {
      document.querySelector("#pane-side").scrollBy(0, 72);
      // scrolldelay = setTimeout(pageScroll, 100);
    }
    pageScroll();
  });

  var style = "";
  style +=
    "#btnOpenWhatsAllApp { height: 70px; border-radius: 50px; width: 70px; background-color: #43d854;  ";
  style +=
    "position: fixed; top: 15px; left: 15px; z-index: 99999; box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06), 0 2px 5px 0 rgba(0,0,0,0.2);}";
  style +=
    "#btnOpenWhatsAllApp:hover { box-shadow: none; top:16px; cursor: pointer; }";
  style += "#btnOpenWhatsAllApp.hide { display: none; }";
  style +=
    "#btnOpenWhatsAllApp .titleText {text-align: center; font-size: 17px; padding-top: 27px; color: white; }";
  var styleEl = document.createElement("style");
  styleEl.innerHTML = style;
  body.appendChild(startBtnDiv);
  body.appendChild(styleEl);
}

addActivateBtn();
