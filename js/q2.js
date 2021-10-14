function fatorial(numero) {
    var i = numero;
    while (i > 1) {
        i = i - 1;
        numero = numero * i;
    }
    return numero;
}

function quadrado(numero) {
    return numero * numero;
}

function raizQuadrada(numero) {
    var raiz = Math.sqrt(numero).toFixed(2);
    return raiz;
}

function calcular() {
    var num = document.getElementById("num1").value;
    var fat = fatorial(num);
    var quad = quadrado(num);
    var raiz = raizQuadrada(num);

    document.getElementById("numero").innerHTML = num;
    document.getElementById("numero_quadrado").innerHTML = quad;
    document.getElementById("numero_fatorial").innerHTML = fat;
    document.getElementById("numero_raiz").innerHTML = raiz;
    document.getElementById("num1").value = " ";
}
// Faça um programa que entre com oito números e imprima o quadrado, o fatorial
// e raiz quadrada arredondado para duas casas decimais. Colocar cada número
// numa tabela (Incluir o cabeçalho informando o tipo de operação). Crie uma
// função para cada um desses cálculos. Para cada um use as seguintes cores:
// (vermelho, roxo, rosa)
/* 
-------Lista de Exercício --------
Curso: Informática - 523
Disciplina: Programação Web I
Equipe 1: Gleyce, Rayane, Silvia e Guilherme
Matrícula: Gleyce:2019322719;
           Rayane: 2019322764;
           Silvia : 2019322693;
           Guilherme:2019322915.
*/