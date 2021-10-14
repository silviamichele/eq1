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
var vetor = Array();

function armazenar() {
    let value = document.getElementById("n1").value;
    vetor.push(value);
    document.getElementById("n1").value = " ";
    document.getElementById("notas_digitadas").innerHTML = vetor.join(", ");
    if (vetor.length == 10) {
        calcular();
    }
}

function somar(array, indice = 0) {
    if (indice < array.length) {
        return somar(array, indice + 1) + parseFloat(array[indice]);
    }
    return 0;
}

function calcular() {
    for (var x = 0; x <= vetor.length; x++) {
        for (var y = x + 1; y <= vetor.length; y++) {
            if (vetor[x] >= vetor[y]) {
                let a = vetor[x];
                vetor[x] = vetor[y];
                vetor[y] = a;
            }
        }
    }

    document.getElementById("res").innerHTML = "Resultado média:" + (somar(vetor) / vetor.length);
    document.getElementById("res2").innerHTML = "Resultado mediana:" + (vetor[7]);
    document.getElementById("res3").innerHTML = "Resultado somatório:" + (somar(vetor));
    vetor = Array();
}