<?php

$js = "<script>alert('criado com PHP')</script>";


?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aprendendo php</title>
</head>
<body>
    <?php $ativado = ""; ?>
    <?php if($ativado == "sim"){ ?>
        <h1>Está ativado sim!</h1>
    <?php }else{ ?>
        <h1>Não está ativado!</h1>
    <?php  } ?>
    
</body>
</html>