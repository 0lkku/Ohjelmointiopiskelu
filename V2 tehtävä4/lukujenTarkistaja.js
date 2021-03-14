function tarkistus()
{
  var number1 = parseInt(document.getElementById('teksti').value);
  var number2 = parseInt(document.getElementById('teksti1').value);
  var number3 = parseInt(document.getElementById('teksti2').value);
  var number4 = parseInt(document.getElementById('teksti3').value);
  var number5 = parseInt(document.getElementById('teksti4').value);
  var tulos = (number1 + number2 + number3 + number4 + number5) / 5
  var tulos1 = number1 + number2 + number3 + number4 + number5







document.getElementById('vastaus').innerHTML = "lukujen summa on: " + tulos1 + " ja keskiarvo on: " + tulos + ".";
}
