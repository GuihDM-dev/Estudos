<?php
//Manipulação de pastas (Diretórios)

$pasta = "nova-pasta";
//Comando para criar nova pasta

if(!is_dir($pasta)){
    mkdir($pasta,0755,true);
}else{
    //rename($pasta,'teste');
    rename($pasta, 'ab');
    //rmdir($pasta);
}








?>