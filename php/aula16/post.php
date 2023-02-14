<?php





?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post</title>
    <style>
        body {
            text-align: center;
        }
    </style>

</head>
<body>
    <h1>Método Post</h1>
    
        <form method="post" action="recebe_post.php">
            <input type="text" name="nome" placeholder="Digite seu nome aqui" id=""><br><br>
            <input type="text" name="idade" placeholder="Digite sua idade aqui" id=""><br><br>
                <hr><button type="submit">enviar</button>
        </form>

    </body>
</html>