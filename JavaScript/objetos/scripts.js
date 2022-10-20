// OBJETOS

//conjunto de variáveis e funções, que  são chamadas de propriedades e métodos.


var pessoa = {
    nome : 'Grazi',
    idade: 20,
    profissao: 'Monitora do professor bonitao',
    MaiordeIdade: true
}

console.log(pessoa)
console.log(pessoa.nome)
console.table(pessoa)


//Método 
// é uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados : 4 ,
    area: function (lado){
        return lado*lado 
    },
    perimetro: function(lado){
        return quadrado.lados*lado
    }
}
console.log(quadrado.area(8))
console.log(quadrado.perimetro(5))

//Acesse propriedades de um objeto utilizando o ponto

var menu = {
    width: 800 , 
    heigth:50,
    backgroundColor: '#84E'

}

let bg = menu.backgroundColor

console.log(bg)

  

//ARRAYS

// é um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma unica variavel.

let videoGames = ['PS4', 'SWITCH','XBOX']


console.log(videoGames[0])
videoGames.pop() //remove ultimo item
videoGames.push ('3DS') // adiciona no final do array
console.log(videoGames)

//métodos e propriedades do array

console.log(videoGames.length)

let numeros =[1,2,3]
let soma = numeros[0]+numeros[1]
console.log(soma)