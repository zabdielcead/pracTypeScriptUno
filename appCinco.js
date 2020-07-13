"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const numeros_1 = require("./validaciones/numeros");
const textos = __importStar(require("./validaciones/texto")); // importar * todo  as textos alias
console.log(numeros_1.PI);
console.log(textos.obtnerErrorModule(0));
console.log("FIN clase 93 Modulos");
console.log("clase 94 Genéricoss");
// permite trabajar con cualquier tipo de dato 
function regresarGeneric(arg) {
    return arg;
}
console.log(regresarGeneric(15.4128));
console.log(regresarGeneric("Ricardo Tapia"));
console.log(regresarGeneric(new Date()));
// ejemplo de funcion generica
function funcGeneric(arg) {
    return arg;
}
console.log(funcGeneric(15.4128).toFixed(2));
console.log(funcGeneric("Ricardo tapia").charAt(0));
console.log(funcGeneric(new Date().getTime()));
let deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade winston",
    poder: "regenenar"
};
console.log(funcGeneric(deadpool)); //para que sea tratado como heroexx
console.log("Fin clase 94 Genéricos");
console.log("clase 104 Arreglos genéricos");
let herosgenerix = ["Flash", "Batman", "Superman"];
herosgenerix.push("1");
let villanosgenx = ["lex", "flash"];
console.log("Fin clase 104 Arreglos genéricos");
console.log("clase 105 clases genéricos");
class CuadradoZZ {
    area() {
        return this.base * this.altura;
    }
}
class CuadradoZZGenerica {
    area() {
        return +this.base * +this.altura;
    }
}
let cuadrado = new CuadradoZZGenerica();
cuadrado.base = "10";
cuadrado.altura = 10;
console.log(cuadrado.area);
console.log("Fin clase 105 clases genéricos");
console.log("clase 105 Decoradores");
//decorador es una funcion o notaciones
// decoradores de clases
let VillanoDeco = class VillanoDeco {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
VillanoDeco = __decorate([
    consolaDeco
], VillanoDeco);
//decorador de clase normal
function consolaDeco(constructor) {
    console.log(constructor);
}
// decoradores de clases
console.log("Fin clase 105 Decoradores");
console.log("clase 105 Decoradores de fabrica");
// decorador factory
function imprimirConsola(imprimir) {
    console.log("imprimir consola");
    return consolaDeco;
}
let VillanoDecoFactory = class VillanoDecoFactory {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
VillanoDecoFactory = __decorate([
    imprimirConsola(true)
], VillanoDecoFactory);
console.log("Fin clase 105 Decoradores de fabrica");
console.log("clase 110 Ejemplo de un decorador");
function planVillanoEjemplo(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo");
    };
}
function imprimibleVillano(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
let VillanoEjemplo = class VillanoEjemplo {
    constructor(nombre) {
        this.nombre = nombre;
    }
};
VillanoEjemplo = __decorate([
    imprimibleVillano,
    planVillanoEjemplo
], VillanoEjemplo);
let lexEjemplo = new VillanoEjemplo("Lex luthor");
lexEjemplo.imprimirPlan();
lexEjemplo.imprimir();
console.log("Fin clase 110 Ejemplo de un decorador");
console.log("clase 112 Decoradores de métodos");
class VillanoXMetodos {
    constructor(nombre) {
        this.nombre = nombre;
    }
    plan() {
        console.log("es dominar el mundo");
    }
}
__decorate([
    editable(true)
], VillanoXMetodos.prototype, "plan", null);
let lexxVillano = new VillanoXMetodos("lex luthor");
lexxVillano.plan = function () {
    console.log("Es cortar flores");
};
lexxVillano.plan();
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.log("No cambiara de opinion");
        }
        descriptor.writable = esEditable;
    };
}
console.log("Fin clase 112 Decoradores de métodos");
