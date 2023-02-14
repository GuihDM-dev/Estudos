<?php
// IF ELSE ELSEIF

$hora = 12;

if ($hora<12){
    echo "Bom dia!";

}elseif($hora<18){
    echo "Boa tarde!";
}else {
    echo "Boa noite!";
}

//Switch
$cor = "ciano";

switch($cor){
    case "vermelho":
        echo "<br> A cor é vermelho";
        break;
    case "azul":
        echo "<br> A cor é azul";
        break;
    case "laranja":
        echo "<br> A cor é laranja";
        break;
    case "rosa":
        echo "<br> A cor é rosa";
        break;
    default:
    echo "<br> A cor $cor não esta na lista!";
    break;

}





?>