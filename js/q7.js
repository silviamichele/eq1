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

var digitandoData = prompt("Digite uma data separada por '/'"); /* prompt- caixa de diálogo*/
var data = digitandoData.split("/"); /*split: metodo separador*/
var mes = parseInt(data[1]);
var mes_por_extenso = "";


if (mes === 1) {
    mes_por_extenso = "Janeiro";
}else if (mes === 2) {
    mes_por_extenso = "Fevereiro";
} else if (mes === 3) {
    mes_por_extenso = "Março";
} else if (mes === 4) {
    mes_por_extenso = "Abril";
} else if (mes === 5) {
    mes_por_extenso = "Maio";
} else if (mes === 6) {
    mes_por_extenso = "Junho";
} else if (mes === 7) {
    mes_por_extenso = "Julho";
} else if (mes === 8) {
    mes_por_extenso = "Agosto";
} else if (mes === 9) {
    mes_por_extenso = "Setembro";
} else if (mes === 10) {
    mes_por_extenso = "Outubro";
} else if (mes === 11) {
    mes_por_extenso = "Novembro";
} else if (mes === 12) {
    mes_por_extenso = "Dezembro";
}


alert("Dia:" + " " + data[0] + " " + "Mês:" + " " + mes_por_extenso + " " + "Ano:" + " " + data[2]);