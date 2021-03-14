function tarkistus()

{
var number = parseInt(document.getElementById('teksti').value);
var lause = "";

lause += number + "x 1 = " + number * 1;
lause += number + "x 2 = " + number * 2;
lause += number + "x 3 = " + number * 2;
lause += number + "x 4 = " + number * 2;
lause += number + "x 5 = " + number * 2;
lause += number + "x 6 = " + number * 2;
lause += number + "x 7 = " + number * 2;
lause += number + "x 8 = " + number * 2;
lause += number + "x 9 = " + number * 2;
lause += number + "x 10 = " + number * 2;



document.getElementById('vastaus').innerHTML = lause;

}
