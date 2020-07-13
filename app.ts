console.log("Hola mundo cuatros");
// el comando  en la ruta al nivel del index.html -> tsc app -> crea el archivo app.js
// en typescript existe el modo observador tsc app.ts -w   -> si hacen cambios lo compila
// el comando tsc -init  crea el archivo tsconfig.json
// el comando tsc *.ts -w compila todos los archivos con extensión .ts
/*
tipos de datos
- booleanos
- numericos
- strings
- null y undefined
- objetos literales

tsc -w    -> compila los srchivos ts


en tsconfig
 "sourceMap": true,                     /* Generates corresponding '.map' file. 
                                                    para que haga el map  genera el ts para debugg en el explorador
                                                    y ejecutamos el tsc 
                                                    
                                                    para depurar los archivos ts en el explorador



   se puede hacer un archivo compilado de todos los ts files que se unan en uno
   el comando es:
   tsc --outFile main.js app app2
   
   main.js -> archivo de salida 
   app y app2 -> archivos donde va asacar la info
*/

console.log("clase 12: Booleanos");
let esSuperman: boolean = true
let esBatman:boolean;
let esAcuaman: boolean = true;

if(esSuperman){
    console.log("estamos salvaods");
}else{
    console.log("error");
}

esSuperman = convertirClark();

function convertirClark(){
    return false;
}

console.log("FIN clase 12: Booleanos");

console.log("clase 13: Numeros");

let avengers : number = 5;
let villanos : number;
let otros = 2 ;

if( villanos! == undefined ){
    console.log("salvados");
}else {
    console.log("muertos");
}
console.log("fin clase 13: Numeros");


console.log("clase 14: Strings");
let batman: string = "Batman";
let linternaVerda: string = 'linterna Verda';
let volcanNegro: string = `volcan Negro`; 

let concatenar: string = `los h\u00E9roes son: ${batman}, ${linternaVerda},  ${volcanNegro}`;
console.log(concatenar);

console.log("fin clase 14: Strings");


console.log("clase 15: ANY");
let vengador: any = 123;
let existe;
let derrotas;
// si tenemos variables que no son inicializadas  o no ponemos el tipo por defecto son tpo any
vengador = "Dr. Strange";
console.log(vengador.charAt(0)); //primer caracter
vengador = 159.4343;
console.log(vengador.toFixed(2));

vengador = true;
console.log(vengador);

console.log("fin clase 15: ANY");


console.log("clase 16: ANY");

let arreglo: number[] = [1,2,3,4,5,6,7];
arreglo.push(1);
let villanosarray: string[] = ["omega", "doom", "duende verde"];


console.log("fin clase 16: ANY");

console.log("clase 17: Tuplas");
let heroeTupla: [string,number, boolean] = ["Dr. Strange",1000, true];
console.log("fin clase 17: Tuplas");

console.log("clase 18: Enums");
enum Volumen {
    min   = 1,
    medio = 5,
    max   = 10
}
let audio: number = Volumen.min;
console.log(audio);
console.log(Volumen);
console.log("fin clase 18: Enums");

console.log("clase 19: void");
function llamarBatman(): void{ //:void regrasa la funcion
    console.log("Mostrat batman");
    
}

let mensaje = llamarBatman();
console.log("fin clase 19: void");


console.log("clase 20: never");
// never fallo aplicacion puntos criticos que nunca deberia de suceder

function error(mensaje: any): never{
    throw new Error(mensaje);
}
//error("Trono todo");
console.log("fin clase 20: never");

console.log("clase 21: cast aserciones");
let loqueea : any = "Cualquier cosa";
let largo: number = (<string>loqueea).length;
console.log(largo);
console.log("fin clase 20: cast aserciones ");

console.log("clase 21: null undefined");
let nada: undefined = undefined;

let ironsMan: string = "Tony";
//ironsMan = null;


console.log("FIN clase 21: null undefined");