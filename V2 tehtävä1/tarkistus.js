function tarkistus()
{
var number = document.getElementById('teksti').value;
var tulos = number

if (number <0)
{
  tulos = "negatiivinen";
} else if (number >0) {
  tulos = "positiivinen";
} else {
  tulos = "Anna luku"
}



document.getElementById('vastaus').innerHTML = tulos;

}
