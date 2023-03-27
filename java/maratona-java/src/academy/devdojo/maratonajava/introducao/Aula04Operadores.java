package academy.devdojo.maratonajava.introducao;

public class Aula04Operadores {
    public static void main(String[] args) {
        // + - / *
        int numeroUm = 10;
        double numeroDois = 20;
        double resultadoSoma = numeroUm + numeroDois;
        double resultadoDivisao = numeroUm / numeroDois;

        System.out.println("10 + 20 é igual a " + resultadoSoma);
        System.out.println("10 / 20 é igual a " + resultadoDivisao);

        // %
        int restoImpar = 1 % 2;
        double restoPar = 22 % 2;

        System.out.println(restoImpar + " " + restoPar);

        // < > <= >= == !=
        boolean isDezMaiorQueVinte = 10 > 20;
        boolean isDezMenorQueVinte = 10 < 20;
        boolean isDezIgualVinte = 10 == 20;
        boolean isDezDiferenteVinte = 10 != 20;

        System.out.println("isDezMaiorQueVinte " + isDezMaiorQueVinte);
        System.out.println("isDezMenorQueVinte " + isDezMenorQueVinte);
        System.out.println("isDezIgualVinte " + isDezIgualVinte);
        System.out.println("isDezDiferenteVinte " + isDezDiferenteVinte);
    }

}
