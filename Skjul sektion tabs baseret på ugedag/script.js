//Autoselect tab baseret på ugedag
function selectKantineDag() {
  //Sæt getDay til at starte fra mandag i stedet for søndag
  var dag = (new Date().getDay() + 6) % 7;
  //Vælg tabs baseret på sektionens class
  document.querySelectorAll(".kantine-sektion .v-slide-group__content .v-tab")[dag].click();
}
//Kør funktionen på onload
window.onload = selectKantineDag();
