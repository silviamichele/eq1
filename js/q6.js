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
const lista_de_nomes_in = []
var Matriz = Array();

function Adicionar() {
    var tab = ""
    var QL = ""
    var nome = document.getElementById('Nomes').value;
    lista_de_nomes.push(nome)


    for (var i = 0; i < lista_de_nomes.length; i++) {



        var str = lista_de_nomes[i]
        var strin = ""
        for (var x = str.length - 1; x >= 0; x--) {
            strin += str[x]

        }
        if (lista_de_nomes.length > 10) {
            alert("Você ja digitou 10 nomes")
            break
        }

    }
    lista_de_nomes_in.push(strin)

    lista_de_nomes_in.sort()

    for (var i = 0; i < lista_de_nomes_in.length; i++) {

        QL = lista_de_nomes_in[i].length

        var str = lista_de_nomes_in[i]
        var str_in = ""

        str_in += str

        if (lista_de_nomes_in.length <= 10) {


            tab = tab + "<tr><td>" + str_in + "</td><td>" + QL + "</td></tr>"
        }

    }

    Matriz.push([str_in, QL])

    document.getElementById('tb').innerHTML = tab
    document.getElementById('Nomes').value = ''
}