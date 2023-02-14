<?php
    /*SUPERGLOBAIS
    The PHP superglobal variables are:

    $GLOBALS
    $_SERVER
    $_REQUEST
    $_POST
    $_GET
    $_FILES
    $_ENV
    $_COOKIE
    $_SESSION

    
    $GLOBALS['']
    $a = 10;
    $b = 20;

    function soma(){
        global $a,$b,$c;
        $c= $a + $b;
    }

    soma();
    echo $c;
   

    echo $_SERVER['PHP_SELF'];
    echo "<br>";
    echo $_SERVER['SERVER_NAME'];
    echo "<br>";
    echo $_SERVER['HTTP_HOST'];
    echo "<br>";
    echo $_SERVER['REMOTE_ADDR'];
    echo "<br>";
    echo $_SERVER['HTTP_USER_AGENT'];
    */
    foreach($_SERVER as $chave => $valor){
        echo "<strong$chave</strong>: $valor <br>";
    }




?>