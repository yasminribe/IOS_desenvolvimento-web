//1 - Crie um programa que lê um valor e imprima dizendo se ele é maior ou menor que 10

/* let num = prompt(`digite um número: `)
let num2 = 10


if(num >= num2){
    alert(`valor maior que ${num2}`)
}else{
    alert(`valor menor que ${num2}`)
} */


// 2 - faça um programa no qual o usuario deve digitar a idade do seu carro. Se for maior que 3 imprima um alert "SEU CARRO É VELHO". se for menor ou igual a 3 imprima com alert: "SEU CARRO É NOVO"

/* const idadeCarro = prompt(`Digite a idade do seu carro`)
let  idade = 3

if(idadeCarro<=idade){
    alert(`A idade do seu carro é ${idadeCarro} ano(s).... SEU CARRO É NOVO`)
}else{
    alert(`A idade do seu carro é ${idadeCarro} ano(s) .... SEU CARRO É VELHO`)
} */

//3- faça um programa que peça a idade do usiario. se for maior de 18 a mensagem deve ser : "VOCÊ PODE IR PRESO". se for menor "SEUS PAIS SERÃO PRESOS".

const idade = prompt(`Digite a sua idade`)
let  idadeMaior = 18

if(idade >= idadeMaior){
    alert(`Sua idade é ${idade} anos .... VOCÊ PODE IR PRESO`)
}else{
    alert(`Sua idade é ${idade} anos, você é menor de idade .... SEUS PAIS SERÃO PRESOS`)
} 


//4- Escreva um programa pergunte a velocidade do carro de um usuario. Caso ultrapasse 80km/history, exiba uma mensagem dizendo que o usuario foi multado. no caso, exiba o valor da multa , cobrando 5 reais por km acima de 80km/h 

const vel = prompt(`Digite a sua Velocidade (KM): `)
let velMax = 80
let  multa = (vel - velMax) * 5

if(vel > velMax){
    alert(`Sua velocidade é ${vel} km/h ... MULTADO no Valor de R$ ${multa}`)
}else{
    alert(`Sua velocidade é ${vel} km/h ... LIMITE DE VELOCIDADE PERMITIDO`)
} 