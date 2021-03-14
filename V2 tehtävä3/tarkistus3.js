function tarkistus()
{
  var number = document.getElementById('teksti').value;
  var tulos = "..."

if (number <= 0) {
  tulos = "Väärä vuosiluku";
} else if (number%4 == 0 && number%100 != 0) {
  tulos = "Vuosi on karkausvuosi";
} else if (number%400 == 0) {
  tulos = "Vuosi on karkausvuosi";
} else {
  tulos = "Vuosi ei ole karkausvuosi";
}





document.getElementById('vastaus').innerHTML = tulos;
}
