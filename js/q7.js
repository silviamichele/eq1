/* 
-------Lista de Exercício  --------
Curso: Informática - 523
Disciplina: Programação Web I
Equipe 1: Gleyce, Rayane, Silvia e Guilherme
Matrícula: Gleyce:2019322719;
           Rayane: 2019322764;
           Silvia : 2019322693;
           Guilherme:2019322915.
*/

var digitandoData = prompt("Digite uma data separada por / e mês por extenso:"); /* prompt- caixa de diálogo*/
var data = digitandoData.split("/"); /*split: metodo separador*/
alert("Dia:" + " " + data[0] + " " + "Mês:" + " " + data[1] + " " + "Ano:" + " " + data[2]);

