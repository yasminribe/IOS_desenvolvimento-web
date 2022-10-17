const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', imc)

function imc(){
    if (nome.value !== ''){
        const valorIMC = (peso.value / (altura.value**2)).toFixed(1)

        if(valorIMC <= 18.5){
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} <br> Você está abaixo do peso`
        }else if (valorIMC > 18.5 && valorIMC <= 24.9){
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} Você está no peso Normal`
        }else if (valorIMC > 24.9 && valorIMC <= 29.9){
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} Você está com Sobrepeso `
        }else if (valorIMC > 29.9 && valorIMC <= 34.9){
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} Você está com Obesidade grau I `
        }else if (valorIMC > 34.9 && valorIMC <= 39.9){
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} Você está com Obesidade grau II `
        }else{
            resultado.innerHTML = `${nome.value}, seu IMC: ${valorIMC} Você está com Obesidade grau III `
        }

    }else{
        alert('preencha o campo vazio')
    } 
}
