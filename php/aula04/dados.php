<?php
    /* 
    TIPOS DE DADOS
    String, Palavras
    Integer, Inteiro
    Float, Decimal
    Boolean, Verdadeiro ou falso
    Object, Objeto
    Array, Matriz
    NULL
    */


    //String
    $exemplo1 = "String aqui";

    //Integer
    $exemplo2 = 20;

    //Float
    $exemplo3 = 3.5;

    //Boolean
    $exemplo4 = true;

    var_dump($exemplo1);

    var_dump($exemplo2);

    var_dump($exemplo3);

    var_dump($exemplo4);

    //Array
    $carros = array("fusca", "Brasilia", "Chevette");

    var_dump($carros);

    //Objetos

    class carro {
        public $cor;
        public $modelo;
        public function __construct($cor,$modelo){

            $this->cor = $cor;
            $this->modelo = $modelo;

        }
        public function mensagem(){
            return "<br><br>
            O carro é $this->cor e o modelo é $this->modelo <br> <br>";
        }
    }
    
    $carro1 = new carro("Branco", "Fusca");
    echo $carro1->mensagem();



    //NULL

    $x = null;
    var_dump($x);





?>