/* Boolean */

// Existem dois valores booleanos false ou true 
/* var LulaEleito = false
var LulaEleito = true

if (LulaEleito){
    console.log(`Vamos comer picanha`)
}else{
    console.log(`Bolsonaro criou o pix kkkkk `)
} */

/* Operadores relacionais 

 == igualdade
 > maior
 < menor
 != diferente 
 >= maior ou igual
 <= menor ou igual
 */

/*  let a = 1 , b=5 , c=2 , d=1;

console.log(a > b);//false
console.log(a < b);//true
console.log(a == d);//true
console.log(b >= a);//true
console.log(c <= b);//true
console.log(d != a);//false
console.log(d != b);//true
 */

//Condições

/* 
if e else
if é condição verdadeira ("se for verdade ... faça tal trem")
else é a condição falsa ("se não ... é falsa uai")

if(condição){
    verdadeiro
}else{
    falso
}


let GraziFazFaculdade = true

if(GraziFazFaculdade){
    console.log(`Grazi vai se formar`)
}else{
    console.log(`Grazi quer desistir da faculdade`)
}


let v1 = 5 , v2 = 7 ,  v3 = 5 , v4 = 2

if(v1 > v2){
    console.log(`Valor 1 é maior que valor 2 `)
}else {
    console.log(`Valor 1 não é maior que valor 2 `)
}

if(v3!=v2){
    console.log(`número ${v3} é diferente do número ${v2}`)
}else{
    console.log(`número ${v3} não é diferente do número ${v2}`)
}

let numero1 = Number(prompt(`Digite um número: `))
let numero2 = Number(prompt(`Digite um número: `))
let resultado = numero1 + numero2

alert(resultado)
*/


//CONDICIONAIS ELSE IF

/* var GraziPossuiGraduacao = true
var GraziPossuiDoutorado = false

if (GraziPossuiDoutorado){
    console.log(`Possui Graduação e Doutorado`)
}else if (GraziPossuiGraduacao) {
    console.log(`Possui Graduação, mas não tem doutorado`)
}else{
    console.log(`Grazi faz nada da vida`)
} */

var categoria = Number(prompt(`digite a categoria do produto`))

if(categoria == 1){
    alert(`Preço R$ 10,00`)
}else if(categoria == 2){
    alert(`Preço R$ 18,00`)
}else if(categoria == 3){
    alert(`Preço R$ 23,00`)
}else if (categoria == 4){
    alert(`Preço R$ 26,00`)
}else if (categoria == 5){
    alert(`Preço R$ 31,00`)
}else{
    alert(`OPÇÃO INVALIDA ... Digite outro valor entre 1 e 5!`)
}


//swith e case

/* var corFavorita = 'Preto'

switch(corFavorita){
    case  'Preto':
        console.log(`Yasmin usava calça colorida`)
       break;
       
    case 'vermelho' : 
        console.log(`Yasmin apaixonada`)
        break;

    case 'amarelo' : 
        console.log(`tudo golpe`)
        break;
} */

//operadores logicos && AND

console.log(true && true) // verdadeiro
console.log(false && true) // false
console.log(true && false) // false
console.log(false && false) // false

console.log(true || true ) // verdadeiro
console.log(false || true ) // verdadeiro
console.log(true || false ) // verdadeiro
console.log(false  || false ) // falso