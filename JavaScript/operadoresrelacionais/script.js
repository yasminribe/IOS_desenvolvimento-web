/* Boolean */

// Existem dois valores booleanos false ou true 
var LulaEleito = false
//var LulaEleito = true

if (LulaEleito){
    console.log(`Vamos comer picanha`)
}else{
    console.log(`Bolsonaro criou o pix kkkkk `)
}

/* Operadores relacionais 

 == igualdade
 > maior
 < menor
 != diferente 
 >= maior ou igual
 <= menor ou igual
 */

 let a = 1 , b=5 , c=2 , d=1;

console.log(a > b);//false
console.log(a < b);//true
console.log(a == d);//true
console.log(b >= a);//true
console.log(c <= b);//true
console.log(d != a);//false
console.log(d != b);//true


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
*/

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


