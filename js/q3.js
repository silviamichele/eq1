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
/*Peça ao usuário para digitar dez números em uma caixa de texto. Verifique qual
é o maior número, o menor número o número do meio e exiba-o. Exiba para
todos os números, o mês do ano por extenso caso tiver no intervalo de 1-12,
caso não informe que o mês é inválido. Coloque todos os resultados numa
tabela zebrada. Crie uma função que faz essa verificação do mês.*/

const lista_de_numeros = []

function mesArray(numero) {
    if (numero > 0 && numero < 13) {
        switch (numero) {
            case 1:
                return "Janeiro"
            case 2:
                return "Fevereiro"
            case 3:
                return "Março"
            case 4:
                return "Abril"
            case 5:
                return "Maio"
            case 6:
                return "Junho"
            case 7:
                return "Julho"
            case 8:
                return "Agosto"
            case 9:
                return "Setembro"
            case 10:
                return "Outubro"
            case 11:
                return "Novembro"
            case 12:
                return "Dezembro"
        }
    } else {
        return "Mês inválido"
    }
}

function Enviar() {
    var numero = document.getElementById("numero").value;

    lista_de_numeros.push(parseInt(numero));

    for (var i = lista_de_numeros.length; i > 0; i--) {
        if (lista_de_numeros[i] < lista_de_numeros[i - 1]) {
            var aux = lista_de_numeros[i]
            lista_de_numeros[i] = lista_de_numeros[i - 1]
            lista_de_numeros[i - 1] = aux
        }
    }

    if (lista_de_numeros.length === 10) {
        document.getElementById('resultado').innerHTML = "Menor número = " + lista_de_numeros[0] + "<br>Número do meio = " + lista_de_numeros[4] + "<br>Maior número = " + lista_de_numeros[9]
    }

    var tabela = "";
    var mes = "";
    for (var i = 0; i < lista_de_numeros.length; i++) {
        mes = mesArray(lista_de_numeros[i])

        if (lista_de_numeros.length > 10) {
            alert("Você ja digitou 10 números")
            break
        }

        if (lista_de_numeros.length <= 10) {
            tabela = tabela + "<tr><td>" + mes + "</td><td>" + lista_de_numeros[i] + "</td></tr>"
        }
    }

    document.getElementById('tb').innerHTML = tabela
    document.getElementById("numero").value = ''
}