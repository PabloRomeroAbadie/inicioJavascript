//crear un arreglo con datos
let series = ["juego de calamar", "loki", "frozen",2, true]; 

//crear un arreglo vacio
let temporadas = [];

//mostrar un valor de un arreglo
document.write(series[0]);
//contar cuantos elementos tiene el arreglo
console.log(series.length)

//recorrer elemento por elemento un arreglo

mostrarArreglo("recorrer elemento por elemento un arreglo")

//agregar un elemento al final de un arreglo
series.push("breaking bad");

mostrarArreglo("Arreglos series con nuevo elemento")

//agregar un elemento en una posicion particular 
series.splice(1, 0, "GOT");

mostrarArreglo("agregar un elemento en una posicion particular")

//eliminar un elemento del arreglo
series.splice(5, 1)

mostrarArreglo("eliminar un elemento de una posicion particular")

//modificar un valor del arreglo
series[4] = "friends";


mostrarArreglo("modificar un valor del arreglo")


function mostrarArreglo(titulo){
    document.write("<br><br><b>" + titulo + "</b> <br>")
    
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}
}