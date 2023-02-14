<?php
 // MANIPULAÇÃO DE STRINGS

 //strlen(); numero de caracteres
 $palavra = "No fim cada lagrima derramada vai se tornar um sorriso!";
 echo strlen($palavra);

 echo ("<br>");

 //str_word_count(); contador de palavras
 echo str_word_count($palavra);

 echo ("<br>");

 //strrev(); string ao contrario
 echo strrev("Guilherme");

 echo ("<br>");

 //strpos(); posição inicial de tal string
 echo strpos("Oi tudo bom!", "tudo");

 echo ("<br>");

 //str_replace(); substituir uma string ou palavras dentro dela.
 $palavra1 = "Ola, Mundo!";
 echo str_replace("Mundo!", "Guilherme!", $palavra1);

 echo ("<br>");

 $data = "07-08-2003";
 $data_formatada = str_replace("-", "/", $data);

 echo $data_formatada;



 
?>