"use strict";
console.log("Seccion 2");
console.log("clase 26: Funciones basicas");
let heroePs = "Flash";
function imprimeHeroe() {
    return heroePs;
}
let activas_batis = function () {
    return "Batiseñal";
};
console.log(imprimeHeroe());
console.log(activas_batis());
console.log("Fin clase 26: Funciones basicas");
console.log("clase 27: Parametros obligarotios de la funciones");
function nombreCompleto(nombre, apellido) {
    return nombre + ' ' + apellido;
}
let nombredf = nombreCompleto("clark", "kent");
console.log(nombredf);
console.log("Fin clase 27: Parametros obligarotios de la funciones");
console.log("clase 28: Parametros opcionales de la funciones");
function hola(nombre, apellido) {
    return "hoal " + nombre + " " + apellido;
}
let nombrelop = hola("CEADS");
console.log(nombrelop);
console.log("fin clase 28: Parametros opcionales de la funciones");
console.log("clase 29: Parametros por defecto");
function holaDefecto(nombre, apellido, capitalizado = false) {
    if (!capitalizado) {
        return "hoal " + capitalizar(nombre) + " " + capitalizar(apellido || "ok");
    }
    else {
        return "hoal " + nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
console.log(holaDefecto("carlos"));
console.log("fin clase 29: Parametros defecto");
console.log("clase 30: Parametros REST");
// todo lo que viene por parametro juntarlo en un arreglo
function nombreRestCompleto(nombre, ...losDemasParametros) {
    return nombre + " " + losDemasParametros.join(" ");
}
let superXRest = nombreRestCompleto("Roberto", "Carlos", "Tony");
console.log("superXrest ", superXRest);
console.log("FIN clase 30: Parametros REST");
console.log("clase 31: Tipo Funcion");
function sumarFuncion(a, b) {
    return a + b;
}
function saludarFuncion(nombre) {
    return "Im " + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado");
}
let miFuncion; //() recibe parametros => devuelve despues de la flecha
//miFuncion = 10;
miFuncion = sumarFuncion;
console.log(miFuncion(5, 5)); // mi funcion esta mutando 
//miFuncion = saludarFuncion;
//console.log(miFuncion("Batman"));
//miFuncion = salvarMundo;
//miFuncion();
console.log("FIN clase 31: Tipo Funciones");
console.log("clase 35: Objetos Básicos");
let flashDC = {
    nombre: "BarryAllen",
    edad: 24,
    poderes: [
        "Corre rapido",
        "viajar por el tiempo"
    ]
};
flashDC = {
    nombre: "Clark Kent",
    edad: 500,
    poderes: [
        "Poder volar",
    ]
};
console.log("Fin clase 35: Objetos Básicos");
console.log("clase 36: Objetos Tipos especificos");
let flshD = {
    nombre: "CEAD",
    edad: 24,
    poderes: ["Puede correr", "Viajar por el tiempo"],
};
console.log("Fin clase 36: Objetos Tipos especificos");
console.log("clase 37: Métodos dentro de objetos");
let flshD2 = {
    nombre: "CEAD",
    edad: 24,
    poderes: ["Puede correr", "Viajar por el tiempo"],
    getNombre() {
        return this.nombre;
    }
};
flshD2.getNombre();
console.log("Fin clase 37: Métodos dentro de objetos");
console.log("clase 39: Tipos personalizados");
let supermanType = {
    nombre: "SupermanX",
    edad: 25,
    poderes: ["Fuerte", "volar"],
    getNombre() {
        return this.nombre;
    }
};
console.log('Superman', supermanType.getNombre());
console.log("Fin clase 39: Tipos personalizados");
console.log("clase 40: Multiples tipos permitidos");
let loquesea = 'lo que sea';
loquesea = 10;
console.log("FIN clase 40: Multiples tipos permitidos");
console.log("clase 41: Revisar el tipo de un objeto");
let cosaOBJ = 123;
console.log(typeof cosaOBJ);
if (typeof cosaOBJ === "number") {
    console.log("Cosa es numero");
}
console.log("FIN clase 41: Revisar el tipo de un objeto");
console.log("clase 49: Incluir o excluir carpetas");
//En tsconfig.json 
//"include" : [
//    "app/**/*"
//],
//"exclude" :[
// "node_modules",
// "src/"
//]
// se ejecuta tsc
console.log("FIN clase 49: Incluir o excluir carpetas");
