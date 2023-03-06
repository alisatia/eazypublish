var xdua = document.getElementById("xdua");
var slide = document.getElementById("slide");
var nav = document.getElementById("nav");
var dasi = document.getElementById("dasi");
var dast = document.getElementById("dast");
var biai = document.getElementById("biai");
var biat = document.getElementById("biat");
var stai = document.getElementById("stai");
var stat = document.getElementById("stat");
var nasi = document.getElementById("nasi");
var nast = document.getElementById("nast");
var guii = document.getElementById("guii");
var guit = document.getElementById("guit");
var x = window.matchMedia("(max-width: 1500px)");
var childDash = document.getElementById("child-dash");
var childBiaya = document.getElementById("child-biaya");
var childStatus = document.getElementById("child-status");
var childNaskah = document.getElementById("child-naskah");
var childGui = document.getElementById("child-guidelines");

function dashboard() {
  dasi.style.backgroundImage = "url(../assets/xdashboard.png)";
  biai.style.backgroundImage = "url(../assets/biaya.png)";
  stai.style.backgroundImage = "url(../assets/status.png)";
  nasi.style.backgroundImage = "url(../assets/naskah.png)";
  guii.style.backgroundImage = "url(../assets/guidelines.png)";
  dast.style.color = "#0054a3";
  biat.style.color = "#9D9D9D";
  stat.style.color = "#9D9D9D";
  nast.style.color = "#9D9D9D";
  guit.style.color = "#9D9D9D";
  if (x.matches) {
    dast.style.fontSize = "small";
    biat.style.fontSize = "x-small";
    stat.style.fontSize = "x-small";
    nast.style.fontSize = "x-small";
    guit.style.fontSize = "x-small";
  } else {
    dast.style.fontSize = "medium";
    biat.style.fontSize = "small";
    stat.style.fontSize = "small";
    nast.style.fontSize = "small";
    guit.style.fontSize = "small";
  }
  xdua.style.marginTop = "30px";
  slide.style.gridTemplateRows = "30px 60px 30px";
  nav.style.gridTemplateRows = "30px 120px";
  childDash.style.display = "grid";
  childBiaya.style.display = "none";
  childStatus.style.display = "none";
  childNaskah.style.display = "none";
  childGui.style.display = "none";
}
function biaya() {
  dasi.style.backgroundImage = "url(../assets/dashboard.png)";
  biai.style.backgroundImage = "url(../assets/xbiaya.png)";
  stai.style.backgroundImage = "url(../assets/status.png)";
  nasi.style.backgroundImage = "url(../assets/naskah.png)";
  guii.style.backgroundImage = "url(../assets/guidelines.png)";
  dast.style.color = "#9D9D9D";
  biat.style.color = "#0054a3";
  stat.style.color = "#9D9D9D";
  nast.style.color = "#9D9D9D";
  guit.style.color = "#9D9D9D";
  if (x.matches) {
    dast.style.fontSize = "x-small";
    biat.style.fontSize = "small";
    stat.style.fontSize = "x-small";
    nast.style.fontSize = "x-small";
    guit.style.fontSize = "x-small";
  } else {
    dast.style.fontSize = "small";
    biat.style.fontSize = "medium";
    stat.style.fontSize = "small";
    nast.style.fontSize = "small";
    guit.style.fontSize = "small";
  }
  xdua.style.marginTop = "90px";
  slide.style.gridTemplateRows = "90px 60px 30px";
  nav.style.gridTemplateRows = "30px 180px";
  childDash.style.display = "none";
  childBiaya.style.display = "grid";
  childStatus.style.display = "none";
  childNaskah.style.display = "none";
  childGui.style.display = "none";
}
function status() {
  dasi.style.backgroundImage = "url(../assets/dashboard.png)";
  biai.style.backgroundImage = "url(../assets/biaya.png)";
  stai.style.backgroundImage = "url(../assets/xstatus.png)";
  nasi.style.backgroundImage = "url(../assets/naskah.png)";
  guii.style.backgroundImage = "url(../assets/guidelines.png)";
  dast.style.color = "#9D9D9D";
  biat.style.color = "#9D9D9D";
  stat.style.color = "#0054a3";
  nast.style.color = "#9D9D9D";
  guit.style.color = "#9D9D9D";
  if (x.matches) {
    dast.style.fontSize = "x-small";
    biat.style.fontSize = "x-small";
    stat.style.fontSize = "small";
    nast.style.fontSize = "x-small";
    guit.style.fontSize = "x-small";
  } else {
    dast.style.fontSize = "small";
    biat.style.fontSize = "small";
    stat.style.fontSize = "medium";
    nast.style.fontSize = "small";
    guit.style.fontSize = "small";
  }
  xdua.style.marginTop = "150px";
  slide.style.gridTemplateRows = "150px 60px 30px";
  nav.style.gridTemplateRows = "30px 240px";
  childDash.style.display = "none";
  childBiaya.style.display = "none";
  childStatus.style.display = "grid";
  childNaskah.style.display = "none";
  childGui.style.display = "none";
}
function naskah() {
  dasi.style.backgroundImage = "url(../assets/dashboard.png)";
  biai.style.backgroundImage = "url(../assets/biaya.png)";
  stai.style.backgroundImage = "url(../assets/status.png)";
  nasi.style.backgroundImage = "url(../assets/xnaskah.png)";
  guii.style.backgroundImage = "url(../assets/guidelines.png)";
  dast.style.color = "#9D9D9D";
  biat.style.color = "#9D9D9D";
  stat.style.color = "#9D9D9D";
  nast.style.color = "#0054a3";
  guit.style.color = "#9D9D9D";
  if (x.matches) {
    dast.style.fontSize = "x-small";
    biat.style.fontSize = "x-small";
    stat.style.fontSize = "x-small";
    nast.style.fontSize = "small";
    guit.style.fontSize = "x-small";
  } else {
    dast.style.fontSize = "small";
    biat.style.fontSize = "small";
    stat.style.fontSize = "small";
    nast.style.fontSize = "medium";
    guit.style.fontSize = "small";
  }
  xdua.style.marginTop = "210px";
  slide.style.gridTemplateRows = "210px 60px 30px";
  nav.style.gridTemplateRows = "30px 300px";
  childDash.style.display = "none";
  childBiaya.style.display = "none";
  childStatus.style.display = "none";
  childNaskah.style.display = "grid";
  childGui.style.display = "none";
}
function guidelines() {
  dasi.style.backgroundImage = "url(../assets/dashboard.png)";
  biai.style.backgroundImage = "url(../assets/biaya.png)";
  stai.style.backgroundImage = "url(../assets/status.png)";
  nasi.style.backgroundImage = "url(../assets/naskah.png)";
  guii.style.backgroundImage = "url(../assets/xguidelines.png)";
  dast.style.color = "#9D9D9D";
  biat.style.color = "#9D9D9D";
  stat.style.color = "#9D9D9D";
  nast.style.color = "#9D9D9D";
  guit.style.color = "#0054a3";
  if (x.matches) {
    dast.style.fontSize = "x-small";
    biat.style.fontSize = "x-small";
    stat.style.fontSize = "x-small";
    nast.style.fontSize = "x-small";
    guit.style.fontSize = "small";
  } else {
    dast.style.fontSize = "small";
    biat.style.fontSize = "small";
    stat.style.fontSize = "small";
    nast.style.fontSize = "small";
    guit.style.fontSize = "medium";
  }
  xdua.style.marginTop = "270px";
  slide.style.gridTemplateRows = "270px 60px 30px";
  nav.style.gridTemplateRows = "30px 360px";
  childDash.style.display = "none";
  childBiaya.style.display = "none";
  childStatus.style.display = "none";
  childNaskah.style.display = "none";
  childGui.style.display = "grid";
}

var sone = document.getElementById("sone");
var stwo = document.getElementById("stwo");
var sthree = document.getElementById("sthree");
var sfour = document.getElementById("sfour");
var sfive = document.getElementById("sfive");
var ssix = document.getElementById("ssix");
var ione = document.getElementById("ione");
var itwo = document.getElementById("itwo");
var ithree = document.getElementById("ithree");
var ifour = document.getElementById("ifour");
var five = document.getElementById("ifive");
var isix = document.getElementById("isix");

function ssone() {
  sone.style.color = "white";
  stwo.style.color = "#9d9d9d";
  sthree.style.color = "#9d9d9d";
  sfour.style.color = "#9d9d9d";
  sfive.style.color = "#9d9d9d";
  ssix.style.color = "#9d9d9d";
  ione.style.display = "block";
  itwo.style.display = "none";
  ithree.style.display = "none";
  ifour.style.display = "none";
  ifive.style.display = "none";
  isix.style.display = "none";
}
function sstwo() {
  sone.style.color = "#9d9d9d";
  stwo.style.color = "white";
  sthree.style.color = "#9d9d9d";
  sfour.style.color = "#9d9d9d";
  sfive.style.color = "#9d9d9d";
  ssix.style.color = "#9d9d9d";
  ione.style.display = "none";
  itwo.style.display = "block";
  ithree.style.display = "none";
  ifour.style.display = "none";
  ifive.style.display = "none";
  isix.style.display = "none";
}
function ssthree() {
  sone.style.color = "#9d9d9d";
  stwo.style.color = "#9d9d9d";
  sthree.style.color = "white";
  sfour.style.color = "#9d9d9d";
  sfive.style.color = "#9d9d9d";
  ssix.style.color = "#9d9d9d";
  ione.style.display = "none";
  itwo.style.display = "none";
  ithree.style.display = "block";
  ifour.style.display = "none";
  ifive.style.display = "none";
  isix.style.display = "none";
}
function ssfour() {
  sone.style.color = "#9d9d9d";
  stwo.style.color = "#9d9d9d";
  sthree.style.color = "#9d9d9d";
  sfour.style.color = "white";
  sfive.style.color = "#9d9d9d";
  ssix.style.color = "#9d9d9d";
  ione.style.display = "none";
  itwo.style.display = "none";
  ithree.style.display = "none";
  ifour.style.display = "block";
  ifive.style.display = "none";
  isix.style.display = "none";
}
function ssfive() {
  sone.style.color = "#9d9d9d";
  stwo.style.color = "#9d9d9d";
  sthree.style.color = "#9d9d9d";
  sfour.style.color = "#9d9d9d";
  sfive.style.color = "white";
  ssix.style.color = "#9d9d9d";
  ione.style.display = "none";
  itwo.style.display = "none";
  ithree.style.display = "none";
  ifour.style.display = "none";
  ifive.style.display = "block";
  isix.style.display = "none";
}
function sssix() {
  sone.style.color = "#9d9d9d";
  stwo.style.color = "9d9d9d";
  sthree.style.color = "#9d9d9d";
  sfour.style.color = "#9d9d9d";
  sfive.style.color = "#9d9d9d";
  ssix.style.color = "white";
  ione.style.display = "none";
  itwo.style.display = "none";
  ithree.style.display = "none";
  ifour.style.display = "none";
  ifive.style.display = "none";
  isix.style.display = "block";
}
