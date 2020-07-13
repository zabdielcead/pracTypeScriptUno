"use strict";
console.log("clase 63 67 clase en es6");
class Avenger {
    constructor(nombre = "fenomenox", poder = "nopower") {
        this.nombre = nombre;
        this.poder = poder;
    }
    getNombre() {
        console.log("get nombre xmen protected");
        return this.nombre;
    }
}
class AvengerVolador extends Avenger {
    constructor(nombre, poder) {
        super(nombre, poder);
        this.vuela = true;
    }
    getNombre() {
        console.log("get nombre xmen public");
        return super.getNombre();
    }
}
let hulk = new Avenger("hulk", "golpear");
console.log(hulk);
let falcon = new AvengerVolador("falcon", "metalico");
console.log(falcon);
console.log(falcon.getNombre());
console.log("Fin clase 63 67 clase en es6");
console.log("clase 72 get y sets");
class MegaAvenger {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        console.log('paso por el get de nombre');
        if (this._nombre) {
            return this._nombre;
        }
        else {
            return "no tiene un nombre el avenger";
        }
    }
    set nombre(nombre) {
        console.log('paso por el set de nombre');
        if (nombre.length < 3) {
            return;
        }
        this._nombre = nombre;
    }
}
let ciclopexxx = new MegaAvenger("ciclope");
let ciclopxxx = new MegaAvenger();
console.log(ciclopexxx.nombre);
console.log(ciclopxxx.nombre);
let ciclopset = new MegaAvenger("newCiclope");
ciclopset.nombre = "CEAD";
console.log("FIN clase 72 get y sets");
console.log("clase 73 Metodos estáticos");
class XMen {
    constructor() {
    }
    static crearXmen() {
        console.log("Se creo usando un método estatico");
        return new XMen();
    }
}
XMen.nombre = "Wolverine";
console.log(XMen.nombre);
let wolverine2zx = XMen.crearXmen();
console.log(wolverine2zx);
console.log("Fin clase 73 Metodos estáticos");
console.log("clase 74 Clases Abstractas");
class Mutanxs {
    constructor(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
}
class abstractMutan extends Mutanxs {
}
//let mutanx = new Mutanxs("wolv", "Log"); // con abstractas no se pueden utilizar
//sirve como moldes para otra clase para heredar metodos a otras clases
let mutanx = new abstractMutan("wolv", "Logan");
console.log("Fin clase 74 Clases Abstractas");
console.log("clase 75 Constructores privados");
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static obtenerInstancia() {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy apocalipsis unico");
        }
        return Apocalipsis.instancia;
    }
}
// la finalidad es crear un solo existencia de la clase 
let realApocalipsis = Apocalipsis.obtenerInstancia();
console.log(realApocalipsis);
console.log("Fin clase 75 Constructores privados");
console.log("clase 78 Interfaz basica");
let guepardo = {
    nombre: "Guepardo",
    poder: "Garra"
};
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
}
enviarMision(guepardo);
console.log("Fin clase 78 Interfaz basica");
console.log("clase 79 Métodos en la interfaz");
let xmeninter = {
    nombre: 'wolmen',
    regenerar(x) {
        console.log('Seha regenerado' + x);
        return true;
    }
};
console.log(xmeninter.nombre);
console.log(xmeninter.regenerar('lox'));
console.log("Fin clase 79 Métodos en la interfaz");
console.log("clase 81 Interfaces en las clases");
class MutanxLod {
    regenerar(nombreReal) {
        console.log('Hola nombreReal ' + nombreReal);
    }
}
let wolvLodx = new MutanxLod();
console.log("Fin clase 81 Interfaces en las clases");
console.log("clase 81 Interfaces para las funciones");
let sumar;
sumar = function (a, b) {
    return a + b;
};
/*
interface Carro{
  llantas:number;
  modelo:string;
}
 
interface Volvo extends Carro{
  seguro:boolean;
}
 
var volvo:Volvo = {
  llantas: 4,
  modelo:"sedan",
  seguro:true
  
}

*/
console.log("Fin clase 81 Interfaces para las funciones");
console.log("clase 87 Namespaces");
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
console.log(Validaciones.validarTexto('Roberto'));
let hoyNow = new Date();
console.log(Validaciones.validarFecha(hoyNow));
/*
importar namespaces

<reference path="" />
*/
console.log("Fin clase 87 Namespaces");
