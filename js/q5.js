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
function imc(peso, altura){
	return Math.round(peso / (altura * altura));
}
//como pegar dados de um formulário
var form = document.getElementById("form");

form.addEventListener("submit", function(stop) {
 	
 	var vetor = Array();

 	var maiorIMC = 0;
 	var idMaiorIMC;
 	
 	var menorIMC = 0;
 	var idMenorIMC;
 	
 	var numH = 0;
 	var numM = 0;

 	for(var x=1; x<=10; x++){
 		
 		var id = "pessoa "+x;
 		var strPeso = "peso"+x;
 		var strData = "data"+x;
 		var strAltura = "altura"+x;
 		var strSexo = "sexo"+x;
 		
 		peso = document.getElementById(strPeso).value;
 		altura = document.getElementById(strAltura).value;
 		sexo = document.getElementById(strSexo).value;

 		var calcIMC = imc(peso, altura);

		if (x == 1){
			menorIMC = calcIMC;
			idMenorIMC = id;

			maiorIMC = calcIMC;
			idMaiorIMC = id;
		}
		else if (calcIMC > maiorIMC){
			maiorIMC = calcIMC;
			idMaiorIMC = id;
		}
		else if (calcIMC < menorIMC){
			menorIMC = calcIMC;
			idMenorIMC = id;
		}


		if (sexo == 1){
			numM += 1;
		}
		else{
			numH += 1;
		}
 		
 		vetor.push({
 			'id': id,
 			'altura':altura,
 			'peso': peso,
 			'sexo': sexo,
 			'data_nas': document.getElementById(strData).value,
 		}
 		)
 		console.log(vetor.length);
 	}
 	if (menorIMC >= 18.5){
 		idMenorIMC = "Não há nenhum desnutrido.";
 		menorIMC = 0;
 	}

 	if (maiorIMC <= 24.9){
 		idMaiorIMC = "Não há nenhum obeso.";
 		maiorIMC = 0;
 	}

	document.getElementById("qtdm").innerHTML = numM;
	document.getElementById("qtdh").innerHTML = numH;
	document.getElementById("pessoamenorimc").innerHTML = idMenorIMC;
	document.getElementById("pessoamaiorimc").innerHTML = idMaiorIMC;
	document.getElementById("maiorimc").innerHTML = maiorIMC;
	document.getElementById("menorimc").innerHTML = menorIMC;
	stop.preventDefault();
});