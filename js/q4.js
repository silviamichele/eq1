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
function enviar(){
  var idade1= document.getElementById("i1").value;
  var idade2= document.getElementById("i2").value;
  var idade3= document.getElementById("i3").value;
  var idade4= document.getElementById("i4").value;
  var idade5= document.getElementById("i5").value;
  var idade6= document.getElementById("i6").value;
  var idade7= document.getElementById("i7").value;
  var idade8= document.getElementById("i8").value;
  
  var array_variaveis = [idade1, idade2, idade3,idade4,idade5,idade6,idade7,idade8]
  var votantes = 0;
  var maior_de_idade = 0;
  var menor_de_idade = 0;
  var aposentados = 0;
  
  for ( var i = 0; i < 8 ; i++) {
    if (array_variaveis[i]>=16){
      votantes += 1;
    }    
    if (array_variaveis[i]>=18){
      maior_de_idade += 1;
    }
    if (array_variaveis[i]>=65){
      aposentados += 1;
    }
    if (array_variaveis[i] <=17){
      menor_de_idade += 1;
    }
  }

    document.getElementById("pessoas_votantes").innerHTML = votantes;
    document.getElementById("pessoas_aposentadas").innerHTML = aposentados;
    document.getElementById("pessoas_maiores").innerHTML = maior_de_idade ;
    document.getElementById("pessoas_menores").innerHTML = menor_de_idade;
  }

