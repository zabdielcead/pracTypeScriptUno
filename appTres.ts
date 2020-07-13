console.log("Clase 55: LET");
//let crea en un ambito especial 
let nombre = "Tonys";

if(true){
    let nombre = "Bruce";
    if(true){
        let nombre = "Ricardo";
    }
}
console.log(nombre);

console.log("FIN Clase 55: LET");


console.log("Clase 56: Const");
// CONST VAN EN MAYUSCULAS
// no se pueden renombrar
const OPCIONESS: string = "SDE";

for(const i of [1,2,3,4]) {
    console.log(i);
}

const OPTIONSX = {
    estado: true,
    audio: 10,
    ultima: "main"
};

OPTIONSX.estado = false;
OPTIONSX.audio = 11;


console.log("Fin Clase 56: Const");


console.log("Clase 57: Templates literales");

let nom1:string = "Bruce";
let nom2:string = 'Ricardo';
let mensaxx: string = `1. esta es una liena normal
2. hola ${nom1}
3.robin es: ${nom2}
`;
console.log(mensaxx);


console.log("FIN Clase 57: Templates literales");


console.log("Clase 58: Funciones de flecha");

let sumarFlecha = (a:number,b: number) => a+b;  // recibe dos parametos y despues de => codigo a realizar 

console.log(sumarFlecha(1,6));

let darOrdenHulk = (orden:string) => `Hulk ${orden}`;

console.log(darOrdenHulk("smash"));

let capitan_amex = {
    nombre: "Hulk",
    setOrdenhulk: function(){
        setTimeout(() => { // => no pierde el contexto en this obtiene el nombre Hulk no cambian el objeto this
            console.log(this.nombre+" smash");
        }, 1000);
    }
};

capitan_amex.setOrdenhulk();


console.log("Fin Clase 58: Funciones de flecha");


console.log("Clase 59: Destructuracion de objetos");
let avengXZ = {
    nick: "Samuel Jackson",
    ironman: "Robert Downey",
    vision: "Paul Bettany"
}

/* let nick = avengXZ.nick;
let ironman =avengXZ.ironman; */

let {nick, ironman:warmachine, vision} = avengXZ; // ironman:warmachine esto se renombra por warmachine
console.log(nick+warmachine+vision); 
console.log("Fin Clase 59: Destructuracion de objetos");

console.log("Clase 60: Destructuracion de arreglos");
let avengxxz =  ["Samuel jackson", "Robert", "paul"];
let [avengert, avengert2, avengert3] = avengxxz;
console.log(avengert);
console.log(avengert2);
console.log(avengert3);
console.log("FIN Clase 60: Destructuracion de arreglos");
console.log("Clase 61: Ciclo for of");

let thorSZ = {
    nombre: "Thor",
    arma: "Mjolnir"
};
let ironManSZ = {
    nombre: "Ironman",
    arma: "Armorsuit"
};
let capitanSZ = {
    nombre: "Capitan America",
    arma: "Escudo"
};
let avengersSZ = [thorSZ,ironManSZ,capitanSZ];

for(let i in avengersSZ){
    let avenger = avengersSZ[i];
    console.log(avenger.nombre, avenger.arma);
}

for(let avenger of avengersSZ){
    console.log(avenger.arma, avenger.nombre);
}

console.log("FIN Clase 61:Ciclo for of");

