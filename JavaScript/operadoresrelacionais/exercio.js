//Crie um programa que lê um valor e imprima dizendo se ele é maior ou menor que 10

/* let num = prompt(`digite um número: `)
let num2 = 10


if(num >= num2){
    alert(`valor maior que ${num2}`)
}else{
    alert(`valor menor que ${num2}`)
} */


// faça um programa no qual o usuario deve digitar a idade do seu carro. Se for maior que 3 imprima um alert "SEU CARRO É VELHO". se for menor ou igual a 3 imprima com alert: "SEU CARRO É NOVO"

const idadeCarro = prompt(`Digite a idade do seu carro`)
let  idade = 3

if(idadeCarro<=idade){
    alert(`A idade do seu carro é ${idadeCarro} ano(s).... SEU CARRO É NOVO`)
}else{
    alert(`A idade do seu carro é ${idadeCarro} ano(s) .... SEU CARRO É VELHO`)
}