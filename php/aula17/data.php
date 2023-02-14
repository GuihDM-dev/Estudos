<?php
//MANIPULANDO DATAS e HORA- date()

echo date('d/m/Y');
echo "<br>";

$hora = date('H:i:s');
$fuso = date('P');
echo $hora."<br>";
echo "GMT".$fuso;

//Calcular diferença de dias entre datas

$hoje = date('Y-m-d');
$vencimento = '2022-10-15';


$diferenca = strtotime($vencimento) - strtotime($hoje);
//calculo para arrendondar
if ($diferenca < 0){
$dias = floor($diferenca / (60*60*24*-1));    
}else {
    $dias = floor($diferenca / (60*60*24));
}



//conversão para padrao BR
$data_hoje = explode('-',$hoje);
$hoje_formatado = $data_hoje[2]."/".$data_hoje[1]."/".$data_hoje[0];

$ven = explode('-',$vencimento);
$ven_formatado = $ven[2]."/".$ven[1]."/".$ven[0];






echo "<br>";
echo "Hoje: $hoje_formatado <br>";
echo "Vencimento: $ven_formatado <br>";



if (strtotime($hoje) > strtotime($vencimento)) {
    echo "O seu prazo venceu a $dias dias!";
}else{
    echo "Faltam $dias para o vencimento";
}

?>