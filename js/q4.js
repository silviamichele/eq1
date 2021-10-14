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
// var form = document.getElementById("form");
var array_variaveis = []
var votantes = 0;
var maior_de_idade = 0;
var menor_de_idade = 0;
var aposentados = 0;

function adicionar() {
    var idade1 = document.getElementById("i1").value;
    array_variaveis.push(idade1);
    document.getElementById("idade").innerHTML = array_variaveis.join(", ");
    array_variaveis.push(idade1);
    if (idade1 >= 16) {
        votantes += 1;
    }
    if (idade1 >= 18) {
        maior_de_idade += 1;
    }
    if (idade1 >= 65) {
        aposentados += 1;
    }
    if (idade1 <= 17 && idade1 >= 0) {
        menor_de_idade += 1;
    }

    document.getElementById("pessoas_votantes").innerHTML = votantes;
    document.getElementById("pessoas_aposentadas").innerHTML = aposentados;
    document.getElementById("pessoas_maiores").innerHTML = maior_de_idade;
    document.getElementById("pessoas_menores").innerHTML = menor_de_idade;
}