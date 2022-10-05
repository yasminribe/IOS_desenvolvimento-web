//Escreva um programa que leia dois numeros e que pergunte qual operação voce deseja realizar. Você deve poder calcular soma(+), subtração(-) e multiplicação(*).Exiba o resultado da operação solicitada.

const numero1 = Number(prompt('Digite um numero:'))
const numero2 = Number(prompt('Digite outro numero:'))
const operador = prompt('Escolha uma operação +, -, * , /')

if(operador == "+"){
    alert(numero1+numero2)
}else if ( operador == "-"){
    alert(numero1-numero2)
}else if(operador == "*"){
    alert(numero1*numero2)
}else if (operador == "/"){
    alert(numero1 / numero2)
}else{
    alert('Operador Inválido, digite um operador válido novamente!')
}


// verifique se a sua idade é maior do que a de algum parente

const idade = prompt(`digite a sua idade: `)
let minhaIdade = 26

if(idade > minhaIdade){
    console.log(`Parente Mais velho `)
}else{
    console.log(`Parente Mais novo`)
}

//escreva um programa que pergunte a distancia que um passageiro deseja percorre em km. Calcule o preço da passagem cobrando 0,50 por km para viagens de até 200km, e 0,45 para viagens mais longas

const distancia = Number(prompt(`digite a sua distância (KM): `))
let preçoAte200 = distancia * 0.50
let precoAcima200 = distancia * 0.45

if(distancia <= 200){
    console.log(`Preço da passagem R$ ${preçoAte200}`)
}else{
    console.log(`Preço da passagem R$ ${precoAcima200}`)
}