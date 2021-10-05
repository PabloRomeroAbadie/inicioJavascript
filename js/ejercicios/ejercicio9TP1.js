let frase = prompt("ingrese una frase");

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(1));
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

frase = frase.toLocaleLowerCase();

//recorrer la frase con un bucle, el fin de mi bucle frase.length

//if preguntar si cada caracter es una vocal (frase.charAt(X) == "a" || frase.charAt(x) == "e")

//mostrar un document.write ( frase.charAt(x))

for (let i=0; i < frase.length; i++){
    if(frase.charAt(i) == "a" || frase.charAt(i) == "e" || frase.charAt(i) == "i" || frase.charAt(i) == "o" || frase.charAt(i) == "u" ){
        document.write(frase.charAt(i));
    }
}