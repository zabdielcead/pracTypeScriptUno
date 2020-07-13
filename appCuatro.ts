console.log("clase 63 67 clase en es6");

class Avenger {
    nombre:string;
    poder:string;
    constructor(nombre:string = "fenomenox", poder:string="nopower"){
        this.nombre = nombre;
        this.poder = poder;
    }
    protected getNombre(): string{
        console.log("get nombre xmen protected");
        
        return this.nombre;
    }
}

class AvengerVolador extends Avenger {
    vuela:boolean;
    constructor(nombre:string, poder: string){
        super(nombre, poder);
        this.vuela = true;
    }
    public getNombre(){
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
    private _nombre?: string;
    constructor( nombre?: string){
        this._nombre = nombre;
    }

    get nombre():string{
        console.log('paso por el get de nombre');

        if(this._nombre){
            return this._nombre;
        }else {
            return "no tiene un nombre el avenger"
        }
        
    }

    set nombre(nombre:string){
        console.log('paso por el set de nombre');

        if(nombre.length < 3){
            return;
        }
        this._nombre = nombre;
    }
}


let ciclopexxx:MegaAvenger  =  new MegaAvenger("ciclope");
let ciclopxxx:MegaAvenger  =  new MegaAvenger();

console.log(ciclopexxx.nombre);
console.log(ciclopxxx.nombre);
let ciclopset:MegaAvenger  =  new MegaAvenger("newCiclope");
ciclopset.nombre = "CEAD";

console.log("FIN clase 72 get y sets");


console.log("clase 73 Metodos estáticos");

class XMen {
    static nombre: string = "Wolverine";
    constructor(){

    }
    static crearXmen(){
        console.log("Se creo usando un método estatico");
        return new XMen();
    }
}

console.log(XMen.nombre);

let wolverine2zx= XMen.crearXmen();

console.log(wolverine2zx);

console.log("Fin clase 73 Metodos estáticos");
console.log("clase 74 Clases Abstractas");

abstract class Mutanxs {
    constructor(public nombre: string, public nombreReal: string){

    }
}

class abstractMutan extends Mutanxs{

}

//let mutanx = new Mutanxs("wolv", "Log"); // con abstractas no se pueden utilizar
//sirve como moldes para otra clase para heredar metodos a otras clases

let mutanx = new abstractMutan("wolv", "Logan");


console.log("Fin clase 74 Clases Abstractas");

console.log("clase 75 Constructores privados");

    class Apocalipsis{
        static instancia: Apocalipsis;
        
        private constructor(public nombre: string){

        }

        static obtenerInstancia(){
            if(!Apocalipsis.instancia){
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
interface Xmnexs {
    nombre: string,
    poder?: string // ? propiedad opcional
}

let guepardo: Xmnexs = {
    nombre: "Guepardo",
    poder: "Garra"
}


function enviarMision(xmen: Xmnexs){
    console.log("Enviando a: "+ xmen.nombre  );
}
enviarMision(guepardo);
console.log("Fin clase 78 Interfaz basica");

console.log("clase 79 Métodos en la interfaz");
interface XMods {
    nombre: string;
    regenerar( nombreReal: string): boolean;
}

let xmeninter : XMods = {
    nombre: 'wolmen',
    regenerar(x:string){
        console.log('Seha regenerado' + x);
        return true;
    }
    
};

console.log(xmeninter.nombre);
console.log(xmeninter.regenerar('lox'));
console.log("Fin clase 79 Métodos en la interfaz");


console.log("clase 81 Interfaces en las clases");

interface XLod {
    nombre: string;
    nombreReal?: string;
    regenerar(nombreReal: string): void;
}

class MutanxLod implements XLod{
    nombre!: string;
    nombreReal?: string | undefined;
    regenerar(nombreReal: string): void {
        console.log('Hola nombreReal '+ nombreReal);
    }
    
}

let wolvLodx = new MutanxLod();

console.log("Fin clase 81 Interfaces en las clases");


console.log("clase 81 Interfaces para las funciones");
interface DosNumerosFunc{
    (num1: number, num2: number) : number
}

let sumar: DosNumerosFunc;

sumar = function(a: number, b: number) {
    return a+b;
}
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
namespace Validaciones { //unico lado donde se van a quedar las validaciones agrupa todas las funciones en un lugar en especifico
    export function validarTexto(texto:string): boolean{ //export para que se vista desde a fuera 
        if(texto.length > 3){
            return true;
        }else{
            return false;
        }
    }
    export function validarFecha( fecha: Date ): boolean{
        if(isNaN(fecha.valueOf())){
            return false; 
        }
        return true;
    }
    

}



console.log(Validaciones.validarTexto('Roberto'));

let hoyNow = new Date();
console.log(Validaciones.validarFecha(hoyNow));

/*
importar namespaces

<reference path="" />
*/
console.log("Fin clase 87 Namespaces");







