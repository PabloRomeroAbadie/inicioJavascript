//crear un arreglo con datos
let series = ["juego de calamar", "loki", "frozen",2, true]; 

//crear un arreglo vacio
let temporadas = [];

//mostrar un valor de un arreglo
document.write(series[0]);
//contar cuantos elementos tiene el arreglo
console.log(series.length)

//recorrer elemento por elemento un arreglo
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}

//agregar un elemento al final de un arreglo
series.push("breaking bad");

document.write("<br><br><b>Arreglos series con nuevo elemento</b> <br>")

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}

//agregar un elemento en una posicion particular 
series.splice(1, 0, "GOT");

document.write("<br><br><b>Agregar un elemento en una posicion particular</b> <br>")
for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}

//eliminar un elemento del arreglo
series.splice(5, 1)

document.write("<br><br><b>eliminar un elemento de una posicion particular</b> <br>")

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}

//modificar un valor del arreglo
series[4] = "friends";

document.write("<br><br><b>modificar el valor de un arreglo</b> <br>")

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion]);
}