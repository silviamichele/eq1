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
const lista_de_nomes = []
var Matriz = Array();

function Adicionar() {
    var tab = ""
    var QL = ""
    var nome = document.getElementById('Nomes').value;
    lista_de_nomes.push(nome)
    console.log(lista_de_nomes.sort())

    for (var i = 0; i < lista_de_nomes.length; i++) {

        QL = lista_de_nomes[i].length

        var str = lista_de_nomes[i]
        var strin = ""
        for (var x = str.length - 1; x >= 0; x--) {
            strin += str[x]

        }
        if (lista_de_nomes.length > 10) {
            alert("Você ja digitou 10 nomes")
            break
        }
        if (lista_de_nomes.length <= 10) {


            tab = tab + "<tr><td>" + strin + "</td><td>" + QL + "</td></tr>"
        }

    }
    Matriz.push([strin, QL])

    document.getElementById('tb').innerHTML = tab
    document.getElementById('Nomes').value = ''
}