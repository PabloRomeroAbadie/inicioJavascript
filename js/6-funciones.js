// funciones sin parametros
function saludar(){
    //todo el codigo que quiero que tenga la funcion
    document.write("hola mundo");
}

// funciones con parametros
function saludo(nombre, apellido){
    document.write("<br>hola mi nombre es: "+ nombre + "y mi apellido es "+ apellido);
}


// funciones que retornan un valor
// function convertirDolaresAPesos(dolares){
//     let pesosFinales = dolares * 185;
//     console.log(pesosFinales);
//     // el return es la ultima linea de codigo de una funcion
//     return pesosFinales;
// }

// funciones en forma de flecha
let convertirDolaresAPesos = (dolares)=>{
    let pesosFinales = dolares * 185;
    console.log(pesosFinales);
    // el return es la ultima linea de codigo de una funcion
    return pesosFinales;
}



//invocar o llamar a una funcion
saludar()


let nombreSolicitado = prompt("Ingrese un nombre")
let apellidoSolicitado = prompt("Ingrese un apellido")

saludo(nombreSolicitado, apellidoSolicitado);
saludo("Alejandro ", "Mercado");

let pesos = convertirDolaresAPesos(1000);

document.write("<br>Procucto: Iphone x $" + pesos)
document.write("<br>Producto: xiomi redmi note 9 pro, $"+ convertirDolaresAPesos(300))





