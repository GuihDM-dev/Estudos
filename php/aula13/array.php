<?php
//Arrays (Matrizes)
// Sort(rsort ao contrario): ordem alfabetica, asort(arsort ao contrario): ordem numerica crescente do valor, ksort(krsort ao contrario): ordem alfabetica da chave
$carros = ["Aston martin", "350z", "Koenigsegg one:one", "Bentley"];

$carros[1] = "Regera 1";
sort($carros);

$qtd = count($carros);

foreach ($carros as $carro){
    echo $carro. "<br>";
}

/*for ($i = 0; $i < $qtd; $i++){
    echo $carros[$i];
    echo "<br>";
}*/


/*
$idade = ["Dimitri"=>"30","Guilherme"=>"19","Amor"=>"18"];

echo $idade["Guilherme"];

foreach ($idade as $chave => $valor){
    echo "<br> $chave tem $valor anos de idade! <br>";
}
*/


?>