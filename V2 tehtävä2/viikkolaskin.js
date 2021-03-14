function tarkistus()
{
var number = document.getElementById('teksti').value;
var tulos = "..."

if (number ==1)
{
  tulos = "Maanantai";
} else if (number ==2) {
  tulos = "Tiistai";
} else if (number ==3) {
  tulos = "Keskiviikko";
} else if (number ==4) {
  tulos = "Torstai";
} else if (number ==5) {
  tulos = "Perjantai";
} else if (number ==6) {
  tulos = "Lauantai";
} else if (number ==7) {
  tulos = "Sunnuntai";
} else {
  tulos = "Anna luku 1-7";
}



document.getElementById('vastaus').innerHTML = tulos;

}
