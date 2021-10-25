// crear una clase
// nombre, apellido, email, direccion, fotoPerfil, dni
class persona{
    // primer metodo a crear y su mision es crear objetos
    constructor(_nombre, _apellido, _email, _edad, direccion, fotoPerfil, dni){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.email = _email;
        this.edad = _edad;
        this.direccion = direccion;
        this.fotoPerfil = fotoPerfil;
        this.dni = dni;
        this.estado = true; //parametro por defecto
    }

    //agregar los metodos
    mostrarDatos(){
        // document.write("<br>Nombre: "+ this.nombre+"<br>"+ this.apellido)
        document.write(`<br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>Email: ${this.email}
        <br>Edad: ${this.edad}
        <br>direccion: ${this.direccion}
        <br>Dni: ${this.dni}`) 
    }

    // crear las propiedades conmutadas get y set
    //muestran una propiedade
    get mostrarNombre(){
        return this.nombre;
    }

    get mostrarApellido(){
        return this.apellido;
    }

    //modifican una propiedad
    set modificarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    set modificaApellido(nuevoApellido){
        this.apellido = nuevoApellido;
    }

}

// herencia
class Alumno extends persona {
    constructor(_nombre, _apellido, _email, _edad, direccion, fotoPerfil, dni, curso, legajo){
        // invoco al contructor de la clase persona
        super(_nombre, _apellido, _email, _edad, direccion, fotoPerfil, dni);
        // agregar las nuevas propiedades
        this.curso = curso;
        this.legajo = legajo;
        this.calificaciones = [];
    }
}

//declarar variables
//crear el arreglo
let listaPersonas = [];

//como crear un objeto, crear instanciar
let Pablo = new persona ("Pablo", "Romero", "pabloabadie1995@gmail.com", 26, "esquina-mancopa", "url", 38741283);
console.log(Pablo);

let axel = new persona ("Axel", "campo", "acampo@gmail.com",23,"direccion aleatoria", "url", 39423987);
console.log(axel)

//guardar los objetos dentro del arreglo
listaPersonas.push(Pablo);
listaPersonas.push(axel);
console.log(listaPersonas);

// // usar los metodos de la clase persona
// Pablo.mostrarDatos();
// axel.mostrarDatos();

for(let i = 0; i < listaPersonas.length; i++){
    console.log(listaPersonas[i])
    listaPersonas[i].mostrarDatos();
}

// modificar una propiedad del objeto creado a partir de una clase
//Pablo.direccion = "nueva direccion"; mala practica

Pablo.modificarNombre = "Paulo";

document.write(`<h6>Apellido: ${Pablo.mostrarNombre} ${Pablo.mostrarApellido}</h6>`);

document.write(`<h6>Apellido: ${axel.mostrarNombre} ${axel.mostrarApellido}</h6>`);





