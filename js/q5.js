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
var form = document.getElementById("form");
var vetor = Array();
var maiorIMC = 0;
var idMaiorIMC;
var menorIMC = 0;
var idMenorIMC;
var numH = 0;
var numM = 0;

function imc(peso, altura) {
    return Math.round(peso / (altura * altura));
}

function qtd(sexo) {
    if (sexo == 1) {
        numM += 1;
    } else {
        numH += 1;
    }
}

function verificaIMC(calcIMC) {
    let id = "pessoa " + (vetor.length + 1);
    if (vetor.length == 0) {
        menorIMC = calcIMC;
        idMenorIMC = id;

        maiorIMC = calcIMC;
        idMaiorIMC = id;
    }
    if (calcIMC > maiorIMC) {
        maiorIMC = calcIMC;
        idMaiorIMC = id;
    }
    if (calcIMC < menorIMC) {
        menorIMC = calcIMC;
        idMenorIMC = id;
    }
}

function informacoes() {
    if (menorIMC >= 18.5) {
        idMenorIMC = "Não há nenhum desnutrido.";
        menorIMC = 0;
    }

    if (maiorIMC <= 24.9) {
        idMaiorIMC = "Não há nenhum obeso.";
        maiorIMC = 0;
    }

    document.getElementById("qtdm").innerHTML = numM;
    document.getElementById("qtdh").innerHTML = numH;
    document.getElementById("pessoamenorimc").innerHTML = idMenorIMC;
    document.getElementById("pessoamaiorimc").innerHTML = idMaiorIMC;
    document.getElementById("maiorimc").innerHTML = maiorIMC;
    document.getElementById("menorimc").innerHTML = menorIMC;
}

function adicionar() {
    let altura = document.getElementById("altura1").value;
    let peso = document.getElementById("peso1").value;
    let sexo = document.getElementById("sexo1").value;
    let data = document.getElementById("data1").value;
    let calcIMC = imc(peso, altura);
    qtd(sexo);
    verificaIMC(calcIMC);

    vetor.push({
        'id': "pessoa " + vetor.length,
        'altura': altura,
        'peso': peso,
        'sexo': sexo,
        'data_nas': data,
    })

    if (vetor.length == 5) {
        informacoes();
    }
}