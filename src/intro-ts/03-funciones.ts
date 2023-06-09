// Funciones
//Si la funcion no se le especifica el tipo de dato
//lo toma como tipo 'any'
//Para especificar el tipo de dato a retornar se coloca
// ':' despues del parentesis y el tipo de dato a retornar
function sumar(a:number,b:number):number{
    return a+b
}

const sumaFlecha = (a:number,b:number):number => {
    return a+b
}

function multiplicar(numero1:number, numero2?:number, base:number = 2):number{
    return numero1*base;
}

const resultado2 = multiplicar(5,0,10)

const resultado = sumar(3,5)

interface Persona{
    nombre: string;
    edad: number;
    group: ()=>void;
}

function UTL(alumno:Persona, cuatrimestre:number):void{
    alumno.edad = 23;
    console.log(alumno);
}
const nuevo:Persona = {
    nombre: 'Mario',
    edad: 25,
    group() {
        console.log('IDGS902', this.edad, this.nombre);
    },
}
UTL(nuevo,44);

//funciones anonimas
const funcSumar=function(a:number,b:number):number{
    return a+b
}
console.log(funcSumar(5,5))

//funcion con parametros opcionales
function calcular(a:number,b:number,c?:number):number{
    if(c)
        return a+b+c;
    else
        return a+b;
}

console.log(calcular(5,5))

// parametros REST en funciones
function calcular2(...valores:number[]):number{
    let suma=0;
    for(let i=0; i<valores.length; i++)
        suma+=valores[i];
    return suma;
}
console.log(calcular2(5,5,5,5,5,5,5,5,5,5,5,5,5,5,5))