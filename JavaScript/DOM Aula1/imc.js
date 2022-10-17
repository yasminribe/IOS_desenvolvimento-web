const nome = document.querySelector('#nome')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', imc)

function imc(){
    if (nome.value !== ''){
        const valorIMC = (peso.value / (altura.value**2)).toFixed(1)
        resultado.innerHTML = valorIMC
    }else{
        alert('preencha o campo vazio')
    } 
}
