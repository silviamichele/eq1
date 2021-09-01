/*Peça ao usuário para digitar dez números em uma caixa de texto. Verifique qual
é o maior número, o menor número o número do meio e exiba-o. Exiba para
todos os números, o mês do ano por extenso caso tiver no intervalo de 1-12,
caso não informe que o mês é inválido. Coloque todos os resultados numa
tabela zebrada. Crie uma função que faz essa verificação do mês.*/

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
const lista_de_numeros = []

function Enviar() {
    var numero = document.getElementById("numero").value;

    lista_de_numeros.push(parseInt(numero))

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

        if (lista_de_numeros.length < 10) {
            tabela = tabela + "<tr><td>" + mes + "</td><td>" + lista_de_numeros[i] + "</td></tr>"
        }
    }

    function mesArray(lista_de_numeros) {
        if (lista_de_numeros > 0 && lista_de_numeros < 13) {
            if (lista_de_numeros === 1) {
                return "Janeiro"
            } else if (lista_de_numeros === 2) {
                return "Fevereiro"
            } else if (lista_de_numeros === 3) {
                return "Março"
            } else if (lista_de_numeros === 4) {
                return "Abril"
            } else if (lista_de_numeros === 5) {
                return "Maio"
            } else if (lista_de_numeros === 6) {
                return "Junho"
            } else if (lista_de_numeros === 7) {
                return "Julho"
            } else if (lista_de_numeros === 8) {
                return "Agosto"
            } else if (lista_de_numeros === 9) {
                return "Setembro"
            } else if (lista_de_numeros === 10) {
                return "Outubro"
            } else if (lista_de_numeros === 11) {
                return "Novembro"
            } else if (lista_de_numeros === 12) {
                return "Dezembro"
            }
        } else {
            return "Mês inválido"
        }
    }

    document.getElementById('tb').innerHTML = tabela
    document.getElementById("numero").value = ''
}