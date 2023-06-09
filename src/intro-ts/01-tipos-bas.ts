// Declaracion de variables
var num1 = 10;
let num2 = 20;
const num3 = 30;

// Variables con tipos de datos
let nombre: string = "RCT"
//nombre = 35

let datos: string|number = 95

datos = "IDGS-902"

let vivo: boolean = false
console.log(vivo)

//Objetos, arreglos, interfaces
// tipo de dato 'any' estilo variant
let mascotas = ['perro','gato',100,true]

//Establecer un tipo de dato en el arreglo
let tem: (boolean|number|string)[] = ['aaaa',true,100]
tem[1] = false
tem.push('hola')
for(let elemento in tem)
    console.log(elemento)

//Arreglo de tipo string
let nombres: string[] = ['Juan','Pedro','Mario']
interface Persona1{
    nombre: string;
    grupo: string;
    edad: number;
    materias: string[];
    // "?" hace que el tipo de dato sea opcional
    activo?: string
}
const alumno: Persona1={
    nombre: 'Mario',
    grupo: 'IDGS902',
    edad: 89,
    materias: ['Español', 'Matematicas']
}
alumno.activo='Inscrito'
console.table(alumno)