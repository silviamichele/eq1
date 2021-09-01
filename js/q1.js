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

function Calculo() {
	var n1 = parseFloat(document.getElementById("n1").value);
	var n2 =parseFloat(document.getElementById("n2").value);
	var n3 = parseFloat(document.getElementById("n3").value);
	var n4 = parseFloat(document.getElementById("n4").value);
	var n5 = parseFloat(document.getElementById("n5").value);
	var n6 = parseFloat(document.getElementById("n6").value);
	var n7 = parseFloat(document.getElementById("n7").value);
	var n8 = parseFloat(document.getElementById("n8").value);
	var n9 = parseFloat(document.getElementById("n9").value);
	var n10 = parseFloat(document.getElementById("n10").value);
	var n11 = parseFloat(document.getElementById("n11").value);
	var n12 = parseFloat(document.getElementById("n12").value);
	var n13 =parseFloat(document.getElementById("n13").value);
	var n14 = parseFloat(document.getElementById("n14").value);
	var n15 =parseFloat(document.getElementById("n15").value);

	document.getElementById("res").innerHTML =  "Resultado média:"+ (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+n14+ n15)/15;
	document.getElementById("res2").innerHTML= "Resultado mediana:"+(n8);
	document.getElementById("res3").innerHTML= "Resultado somatório:" + (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+n14+ n15);

}

