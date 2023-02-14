<?php
// METODO $_GET
if (isset($_GET['nome']) && isset($_GET['idade'])){
    echo "<h1>O nome é ". $_GET['nome']." e a idade ". $_GET['idade']."</h1>";
}
echo "<a href='get.php'><button>Voltar</button></a>";
?>