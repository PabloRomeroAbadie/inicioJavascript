//declaro variables
let numero1 = parseInt (prompt("ingrese un primer numero"));
let numero2 = parseInt (prompt("ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

/* estructura if
if(condicion logica && condicion logica){
    todas las lineas de codigo que quiera que haga mi programa si la condicion es verdadera
}else{
    todas las lineas de codigo que quiero que haga el programa si la condicion es falsa
}

*/

if(numero1 > numero2){
    document.write("el primer numero es el mas grande " + numero1)
}else{
    if(numero1 == numero2){
        document.write("los numeros son iguales "+ numero2)
    document.write("el segundo numero es el mas grande " + numero2)
     }
}