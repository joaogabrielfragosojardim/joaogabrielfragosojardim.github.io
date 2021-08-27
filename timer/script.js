var s = 0;
var m = 0;
var h = 0;
var guardaTempo;
var h1 = document.getElementsByTagName("h1")[0];
var verdadeiro = true;
var btnComecar = document.getElementById("comecar");
var btnParar = document.getElementById("parar");
var btnZerar = document.getElementById("zerar");
var btnRetomar = document.getElementById("retomar");

var tempo = 10;

function comecar() {
  guardaTempo = setInterval(() => {
    comecarContar();
  }, tempo);

  h1.style.color = "blue";
  btnComecar.style.display = "none";
  btnParar.style.display = "inline";
  btnZerar.style.display = "inline";
  btnRetomar.style.display = "none";
}

function parar() {
  clearInterval(guardaTempo);
  btnRetomar.style.display = "inline";
  btnParar.style.display = "none";
}

function zerar() {
  clearInterval(guardaTempo);

  s = 0;
  m = 0;
  h = 0;

  h1.innerHTML = "00:00:00";

  btnRetomar.style.display = "none";
  btnZerar.style.display = "none";
  btnParar.style.display = "none";
  btnComecar.style.display = "inline";
}

function comecarContar() {
  s++;

  if (s == 59) {
    s = 0;
    m++;
  }

  if (m == 59) {
    m = 0;
    h++;
  }

  h1.innerHTML =
    (h < 10 ? "0" + h : h) +
    ":" +
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s);
}
