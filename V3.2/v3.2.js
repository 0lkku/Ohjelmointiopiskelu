
//tehtävä1
function laskin()
{

var pisteet = 0;
var sana = document.getElementById('sana1').value;
for(var a = 0; a < sana.length; a++)
{
  switch (sana[a]){
case 'a':
case 'e':
case 'i':
case 'n':
case 's':
case 't':
case 'A':
case 'E':
case 'I':
case 'N':
case 'S':
case 'T':
pisteet++;
break;
case 'o':
case 'ä':
case 'k':
case 'l':
case 'O':
case 'Ä':
case 'K':
case 'L':
pisteet+=2
break;
case 'u':
     case 'm':
     case 'U':
     case 'M':
       pisteet+=3;
       break;
     case 'y':
     case 'h':
     case 'j':
     case 'p':
     case 'r':
     case 'v':
     case 'Y':
     case 'H':
     case 'J':
     case 'P':
     case 'R':
     case 'V':
       pisteet+=4;
       break;
     case 'ö':
     case 'd':
     case 'Ö':
     case 'D':
       pisteet+=7;
       break;
     case 'b':
     case 'f':
     case 'g':
     case 'B':
     case 'F':
     case 'G':
       pisteet+=8;
       break;
     case 'c':
     case 'C':
       pisteet+=10;
       break;
     default:
       pisteet+=12;
}
}
document.getElementById('vastaus').innerHTML = "kirjoittamasi sana on " + sana + " ja pisteesi olivat " + pisteet;
}

//tehtävä2
function arvo()
{

var min = Math.ceil(1);
var max = Math.floor(40);
var pisteet = [];
for(var b = 0; b < 7; b++)
{
pisteet.push(Math.floor(Math.random()*(max-min)+min))
}

document.getElementById('vastaus1').innerHTML = pisteet;
}

//tehtävä3
function tauluko()
{
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('vastaus2').innerHTML = taulu;
}

//tehtävä4
function kortti()
{

var pakka = [''];
var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
var numerot = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
var laskuri = 0;
for(var k = 0; k < maat.length; k++)
{
  for(n = 0; n < numerot.length; n++)
     {
       if(k == maat.length-1 && n == numerot.length-1)
       {
         pakka[laskuri] = maat[k] + numerot[n];
       }
       else {
         pakka[laskuri] = maat[k]+numerot[n];
         laskuri++;
       }
 }
}
var kortit = []
for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
document.getElementById('vastaus3').innerHTML = kortit;
}
