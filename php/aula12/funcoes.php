<?php
// Funções functions()
/*
function EscreverMensagem($nome){
    echo "Olá tudo bom $nome?<br>";
}

$i = 1;

EscreverMensagem("Guilherme");

while($i < 10) {
    EscreverMensagem();
    $i++;
}*/



function fazerCafe($tipo = "cappuccino"){
    return "Fazendo uma xícara de: $tipo <br>";
}

echo fazerCafe("expresso");
echo fazerCafe(null);




?>