// let email = "pabloabadie1995@gmail.com"
// let nombre = "Romero Pablo"
// let domicilio = "esquina-mancopa"
// let localidad = "4111"
// let password = "A123&456"

//crear un objeto con notacion literal
let usuarioPablo = {
    // propiedades-> clave:valor
    email: "pabloabadie1995@gmail.com",
    nombre:"Pablo Romero",
    domicilio: "esquina-mancopa",
    localidad: "4111",
    password: "A123&456", 
    estado: true,
    // metodos o funciones
    // login: function (){
    //     document.write("<br>Usuario logueado");
    // }
    login: ()=>{
        document.write("<br>Usuario logueado")
    }
}

// mostrar un objeto
console.log(usuarioPablo);

//mostrar el objeto 1 forma
document.write("Email: "+ usuarioPablo.email);
document.write("<br>Localidad: "+ usuarioPablo.localidad);

//mostrar el objeto 2da forma
document.write("<br>Nombre: "+ usuarioPablo["nombre"]);

// modificar una propiedad del objeto
usuarioPablo.localidad = "4000"
document.write("<br>Localidad: "+ usuarioPablo.localidad);

// agregar una nueva propiedad
usuarioPablo.nivel = 1;
document.write("<br>Nivel: "+ usuarioPablo.nivel);

// Borrar una propiedad de un objeto
delete usuarioPablo.estado; 

// usar un metodo
usuarioPablo.login()