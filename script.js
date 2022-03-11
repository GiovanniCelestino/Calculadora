

menu();

//MENU PRINCIPAL
function menu(){
const boasVindas = alert('Bem vindo!');
const menuOp = Number(prompt('Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração(-)\n 3 - Multiplicação\n 4 - Divisão real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)'));


//INSERIR NÚMERO
if(menuOp >= 1 && menuOp <=5){
var primNum = Number(prompt('Digite o primeiro número'));
var segundNum = Number(prompt('Digite o segundo número'));
}

if(menuOp === 6){
var numBase = Number(prompt('Digite um número'));
var numExpo = Number(prompt('Digite o expoente'));
}



//OPERAÇÕES
function soma(){

    var result = primNum + segundNum;
    alert('O resultado da operação é: ' +result);
}

function subtracao(){
  
    var result = primNum - segundNum;
    alert('O resultado da operação é: ' +result);

}

function multiplicacao(){
    
    var result = primNum * segundNum;
    alert('O resultado da operação é: ' +result);
    
}

function divisaoR(){
    
    var result = primNum / segundNum;
    alert('O resultado da operação é: ' +result);
    
}

function divisaoInt(){
    
    var result = primNum % segundNum;
    alert('O resto da divisão é: ' +result);
    
}

function potenciacao(){
    
    var result = Math.pow(numBase, numExpo);
    alert('O resultado da operação é: ' +result);
    
}





//CHAMADA DAS OPERAÇÕES
switch(menuOp){

  case 1: 
  soma();
  break;

  case 2:
    subtracao();
    break;
    
   case 3:
    multiplicacao();
    break;

    case 4:
    divisaoR();
    break;

    case 5:
    divisaoInt();
    break;

    case 6:
    potenciacao();
    break;
    default:
        alert('Essa opção não existe');
        menu();
}

//FAZER OUTRA OPERAÇÂO OU SAIR
var op = Number(prompt('Fazer outra operação?\n 1 - Sim\n 2 - Sair'));
menuSair();



function menuSair(){
    if (op == 1){
        menu();
    }
    else{
        alert('Obrigado por utilizar a Calculadora');
    }
  
  }

}









