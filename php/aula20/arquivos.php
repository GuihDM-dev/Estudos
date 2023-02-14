<?php
/*MANIPULAÇÃO DE ARQUIVOS
fopen() abrir/criar.
fwrite() escrever no arquivo.
fclose() fechar o arquivo. 
feof() durante leitura avisa que
fgets() pega uma linha do arquivo
file_put_contents() cria arquivo
file_get_contents() pega todo o
unlink() Deleta um arquivo.
copy() Copiar arquivo.
*/
/*
$pasta = "arquivos";

if (!is_dir($pasta)){
    mkdir($pasta,0755,true);
}


$nome_arquivo = date('y-m-d-H-i-s').".txt";


$arquivo = fopen("teste.txt", 'a+');
fwrite($arquivo, 'Uma linha injetada usando PHP!'.PHP_EOL);
fwrite($arquivo, '2 linha injetada usando PHP!' .PHP_EOL);
fwrite($arquivo, '3 linha injetada usando PHP!' .PHP_EOL);
fclose($arquivo);

COPIAR
copy('teste.txt', 'teste2.txt');
*/
/*

if (file_exists($caminho) && is_file($caminho)){
    
    echo file_get_contents($caminho);
    
    $abrirArquivo= fopen($caminho, 'r');
    while(!feof($abrirArquivo)){
        echo "<br>".fgets($abrirArquivo)."<br>";
    }
    fclose($abrirArquivo);
}
*/


//Apagar pasta com
//if (is_dir($pasta)){
//  foreach(scandir($pasta) as $arquivo){
//        $caminho= "arquivos/$arquivo";
//       if (is_file($caminho)){
//            unlink($caminho);
//        }
//   }
//    rmdir($pasta);
//}





//CRIANDO HTMLS

$arquivo = "teste.html";
$titulo = "<h1> Guilherme </h1>";
file_put_contents($arquivo,'
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
</head>
<body>'
    .$titulo.
'</body>
</html>')
?>