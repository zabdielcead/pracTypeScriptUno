console.log("clase 93 Modulos");
/**

npm install systemjs@0.19.41

Pronto me verán realizando la instalación de npm install systemjs, pero no se olviden de colocarlo así

npm install systemjs@0.19.41

Para que no tengan diferencia con mi código y el suyo.



Esta configuración la verán más adelante, si lo instalan con la versión que les digo, no tendrán inconveniente

SystemJS.config({
   
  baseURL: "/",
  defaultJSExtensions: true  
 
})


se instalo 
npm install lite-server --save-dev


para lanzar el servidor es npm run dev

 */


import { PI } from "./validaciones/numeros" ;
import * as textos   from "./validaciones/texto" ; // importar * todo  as textos alias

console.log(PI);

console.log(textos.obtnerErrorModule(0) );

console.log("FIN clase 93 Modulos");


console.log("clase 94 Genéricoss");
// permite trabajar con cualquier tipo de dato 
function regresarGeneric(  arg:any ){
  return arg;
}
console.log(regresarGeneric(15.4128));
console.log(regresarGeneric("Ricardo Tapia"));
console.log(regresarGeneric(new Date()));
// ejemplo de funcion generica
function funcGeneric<T>( arg:T){
  return arg;
}

console.log(funcGeneric(15.4128).toFixed(2))
console.log(funcGeneric("Ricardo tapia").charAt(0));
console.log(funcGeneric(new Date().getTime()));


type HeroeXX = {
  nombre: string, 
  nombreReal: string
}

type villanoXX = {
  nombre: string, 
  poder: string
}

let deadpool = {
  nombre: "Deadpool",
  nombreReal: "Wade winston",
  poder:"regenenar"
}

console.log(funcGeneric<HeroeXX>(deadpool)); //para que sea tratado como heroexx

console.log("Fin clase 94 Genéricos");


console.log("clase 104 Arreglos genéricos");
let herosgenerix :  Array<string> = ["Flash","Batman", "Superman"];
herosgenerix.push("1");
let villanosgenx: string[] = ["lex", "flash"];
console.log("Fin clase 104 Arreglos genéricos");

console.log("clase 105 clases genéricos");
class CuadradoZZ {
  base;
  altura;
  area():number{
    return this.base * this.altura;
  }
}

class CuadradoZZGenerica<T extends number|string> {  // indica que recibira o trabajar con numeros ó string
  base!: T;
  altura!:T;
  area():number{
    return +this.base * +this.altura;
  }
}

let cuadrado = new CuadradoZZGenerica(); 
cuadrado.base   = "10";
cuadrado.altura = 10;
console.log(cuadrado.area);

console.log("Fin clase 105 clases genéricos");


console.log("clase 105 Decoradores");
//decorador es una funcion o notaciones

// decoradores de clases
@consolaDeco
class VillanoDeco{
  constructor(public nombre:string ){

  }

}
//decorador de clase normal
function consolaDeco(constructor:Function){
  console.log(constructor);
}
// decoradores de clases


console.log("Fin clase 105 Decoradores");

console.log("clase 105 Decoradores de fabrica");
// decorador factory
function imprimirConsola(imprimir: boolean): Function{
  console.log("imprimir consola");
   return consolaDeco;
 
}


@imprimirConsola(true)
class VillanoDecoFactory{
  constructor(public nombre:string ){

  }

}


console.log("Fin clase 105 Decoradores de fabrica");


console.log("clase 110 Ejemplo de un decorador");
function planVillanoEjemplo(constructor: Function){
  constructor.prototype.imprimirPlan = function () {
    console.log("El plan de "+ this.nombre+" es dominar el mundo");
  }
}

function imprimibleVillano(constructor: Function){
  constructor.prototype.imprimir = function () {
    console.log(this);
  }
}

@imprimibleVillano
@planVillanoEjemplo
class VillanoEjemplo {
  constructor(public nombre:string){}
}

let lexEjemplo = new VillanoEjemplo("Lex luthor");
(<any>lexEjemplo).imprimirPlan();
(<any>lexEjemplo).imprimir();
console.log("Fin clase 110 Ejemplo de un decorador");


console.log("clase 112 Decoradores de métodos");

class VillanoXMetodos {
  constructor (public nombre: string){

  }
  
  @editable(true)
  plan() {
    console.log("es dominar el mundo");
  }

}

let lexxVillano = new VillanoXMetodos("lex luthor");

lexxVillano.plan = function(){
  console.log("Es cortar flores");
}

lexxVillano.plan();

function editable (esEditable: boolean){
    return function(target: any, nombrePropiedad: string, descriptor:PropertyDescriptor){//PropertyDecorator algo que nos ayudara a controlar si va hacer editable o noel metodo
      if(!esEditable){
        console.log("No cambiara de opinion");
      }
      descriptor.writable = esEditable;
    }
}

console.log("Fin clase 112 Decoradores de métodos");



console.log("clase 112 Decoradores con propiedades");

class VillanoXParametros {

  @editableParams(false)
  public nombre: string;

  constructor ( nombre: string){
    this.nombre = nombre;
  }
  
  @editable(true)
  plan() {
    console.log("es dominar el mundo");
  }

}


function editableParams (esEditable: boolean): any{
  return function(target: any, nombrePropiedad: string, descriptor:PropertyDescriptor){//PropertyDecorator algo que nos ayudara a controlar si va hacer editable o noel metodo
     let descriptorParams: PropertyDescriptor = {
       writable: esEditable
     }
     return descriptorParams;
  }
   
}
console.log("Fin clase 112 Decoradores con propiedades");

console.log("clase 114 Decoradores con parametros");

function parametroDeco(target: any, metodo: string, index:number ){
  console.log(target, metodo, index);
}


class VillanoParametros {
  constructor(public nombre: string){}

  imprimir(plan: boolean, @parametroDeco mensaje: string ): void{
    if(plan){
      console.log("El plan es: "+ mensaje);
    }else{
      console.log(mensaje);
    }
  }
}

let lvillano = new VillanoParametros('JUAN');

console.log("Fin clase 114 Decoradores con parametros");