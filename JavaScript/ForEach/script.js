for(var numero = 0; numero < 5; numero++ ){
    console.log(numero)
}

var Game = ['PS5','Xbox','Pc Game']

for (var contagem = 0; contagem < Game.length; contagem++){
    console.log(Game[contagem])
}
//FOREACH = é um metodo que executa uma função para cada array. é uma forma mais simples de utilizarmos um loop com arrays.

Game.forEach(function(b,c,d) {
    console.log(b,c,d) //mostra o elemento, a posição e seu array
});

//crie um array que os anos que o Brasil ganhou a copa 1959,1662,1970,1994,2002
    let brasil = [ 1959,1662,1970,1994,2002,2022]
//Interaja com array utilizado um loop, para mostrar no console a seguite mensagem, `O brasil ganhou a copa ${ano}`

    brasil.forEach(function(ano) {
        console.log(`O brasil ganhou a copa ${ano}`)
    });