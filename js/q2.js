function fatorial(numero){
	var i = numero;
	while (i>1){
		i = i - 1;
		numero = numero * i;
	}
	return numero;
}
function quadrado(numero){
	return numero * numero;
}
function raizQuadrada(numero){
	var raiz = Math.sqrt(numero).toFixed(2);
	return raiz;
}
function main(){

	for (var i=1; i<=8; i++){
		var str = "num" + i;
		var num = parseFloat(document.getElementById(str).value);

		var strR = str + "r";
		var strQ = str + "q";
		var strF = str + "f";
		var strT = "numt" + i;

		var fat = fatorial(num);
		var quad = quadrado(num);
		var raiz = raizQuadrada(num);

		document.getElementById(strQ).innerHTML = quad;
		document.getElementById(strT).innerHTML = num;
		document.getElementById(strF).innerHTML = fat;
		document.getElementById(strR).innerHTML = raiz;
		// alert(typeof num);
	}
}
// Faça um programa que entre com oito números e imprima o quadrado, o fatorial
// e raiz quadrada arredondado para duas casas decimais. Colocar cada número
// numa tabela (Incluir o cabeçalho informando o tipo de operação). Crie uma
// função para cada um desses cálculos. Para cada um use as seguintes cores:
// (vermelho, roxo, rosa)
