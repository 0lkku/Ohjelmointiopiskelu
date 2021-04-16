
//tehtävä 1
function parilliset2()
{
  var pari = parseInt(document.getElementById('luku1').value);
  var jono = "<p>";
  for(var i = 2; i <= pari; i= i+2)
 {
   jono+=i;
   jono+=" ";
 }
 jono+="</p>";
  document.getElementById('vastaus').innerHTML = jono;
}

//tehtävä 2
function kirjainlisa()
{
  var sana = document.getElementById('sana2').value;
  var salasana = "<p>";
  for(var j = 0; j < sana.length; j++)
  {
    salasana += sana[j] + 'Ö';
  }
  salasana += "</p>";
    document.getElementById('vastaus1').innerHTML = salasana;
}

//tehtävä 3
function kirjainkatsin()
{
  var sana1 = document.getElementById('sana3').value;
  var tulos = "ei ole";
  for(var k = 0; k < sana1.length; k++)
  {
    if(sana1[k] == 'ö')
    {
      tulos = "on"
    }
  }
  document.getElementById('vastaus2').innerHTML = '<p>' + tulos + '</p>';
}

//tehtävä 4
function kerroin()
{
  var lukuu = parseInt(document.getElementById('luku4').value);
  var lasku = 1;
  for(var z = 1; z <= lukuu; z++)
  {
    lasku*=z;
  }
  document.getElementById('vastaus3').innerHTML = '<p>Luvun ' + lukuu + ' kertoma on '+lasku + '</p>';
}

//tehtävä 5
function lukusata()
{
var tuloss = ""
for(var a = 1; a <= 100; a++)
{
  if(a%3 == 0 && a%5 == 0)
  {
    tuloss += "HipHeijaa "
  } else if(a%5 == 0)
  {
    tuloss += "heijaa "
  } else if(a%3 == 0)
  {
    tuloss += "hip "
  } else
  {
    tuloss += a + " "
  }

}
document.getElementById('vastaus4').innerHTML = tuloss;

}

//tehtävä 6
function lukukym()
{
var tulos = ""
for(var b = 1; b <= 10; b++)
{
  tulos += b + " "
}

document.getElementById('vastaus5').innerHTML = tulos;
}

//tehtävä 7
function lukukymplus()
{
var tulos = 0
for(var c = 1; c <= 10; c++)
{
  tulos += c
}

document.getElementById('vastaus6').innerHTML = tulos;
}

//tehtävä 8
function potenssi()
{
var kluku = parseInt(document.getElementById('luku7').value);
var pot = parseInt(document.getElementById('pot7').value);
var tulos = kluku;
for(var d = 1; d < pot; d++)
{
  tulos *= kluku;
}

document.getElementById('vastaus7').innerHTML = tulos;
}

//tehtävä 9
function piensuur()
{
var luku11 = parseInt(document.getElementById('luku81').value);
var luku22 = parseInt(document.getElementById('luku82').value);
var luku33 = parseInt(document.getElementById('luku83').value);
var luku44 = parseInt(document.getElementById('luku84').value);
var luku55 = parseInt(document.getElementById('luku85').value);

var luvut = [luku11, luku22, luku33, luku44, luku55];

var min = luvut[0];
var max = luvut[0];
for(var e =0; e < luvut.length; e++)
{
  if (luvut[e] > max) {
    max = luvut[e];
  }
  else if (luvut[e] < min) {
    min = luvut[e];
 }
}
document.getElementById('vastaus8').innerHTML = "Pienin luku on: " + min + ", ja suurin luku: " + max;
}

//tehtävä 10
function muokSala()
{
var lop = '';
var eka, toka;
var sana = document.getElementById('sana10').value;
var kirj = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
var temp = [];
var muok='...';
for(var q = 0; q < sana.length; q++)
{
eka = sana[q];
temp.push(eka);
muok = Math.floor(Math.random()*kirj.length);
toka = kirj[muok];
temp.push(toka);
}


lop = temp.join('');
document.getElementById('vastaus9').innerHTML = lop;
}

//tehtävä 11
function isoPien()
{
var luk1, luk2, pnum, rnum, psumma=0, rsumma=0, pluvut='', rluvut='';
var luk1 = parseInt(document.getElementById('luku11').value);
var luk2 = document.getElementById('luku12').value;
if(luk1%2 == 0)
  {
    pnum = luk1;
  }
  else {
    pnum = luk1+1;
  }

for(var r = pnum; r <= luk2; r+=2)
{
pluvut += r + ' ';
psumma += r;
}
if(luk1%2 == 0)
{
  rnum = luk1+1;
}
else {
  rnum = luk1;
}
for(var g = rnum; g <= luk2; g+=2)
{
rluvut += g + ' ';
rsumma += g;
}
document.getElementById('vastaus10').innerHTML = 'Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + ' ja parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma;
}
