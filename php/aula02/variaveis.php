<?php
$cor = "azul";

echo $cor;

$cor = "laranja";
//
$x = 10;
$y = 5;

echo "<br><br>", $x + $y, " calculo com php";
//

function teste(){
    global $x;
    echo "<br><br>O valor de x dentro da função: $x ";
}
teste();

echo "<br><br>O valor de x fora da função: $x"

?>