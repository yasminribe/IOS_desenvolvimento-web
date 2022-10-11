//Funções

/* function nome(parametros){
    bloco de ações
} */

function soma(a,b){
    let total = a + b
   return console.log(total)
}
soma(5,8)
soma(5,2)
soma(22,8)
soma(9,8)

// criar função que ache a area de um retângulo de medidas diferentes.

function retangulo(b,a){
    let area = b * a
    return console.log(`A área do retângulo ${area} cm²`)
}

retangulo(40,4)
retangulo(2,10)
retangulo(50,10)

// criar função que ache a area de um quadrado.
function quadrado(l){
    let areaQ = l*l 
    return console.log(`A área do quadrado ${areaQ} cm²`)
}
quadrado(5)
quadrado(50)
quadrado(10)

function pi(){
    return 3.1415
}

var total = 5 + pi()

console.log(total)

//parênteses executa a função

function corfav(cor){
    if(cor=== 'azul'){
        return `você gosta do céu`
    }else if(cor === 'verde'){
        return `você gosta de mato`
    }else{
        return  `você gosta de nada`
    }
}

corfav('azul')

function Weslei(){
    console.log('cachorro loko')
    return
}

addEventListener('click', Weslei())