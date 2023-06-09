// Desestructuración de objetos y arreglos

interface Alumno1{
    matricula1: number;
    nombre1: string;
    edad1: number;
    email1: string;
    grupo1: Grupo;
}

interface Grupo{
    grupo: string;
    year: number;
}

const alumno2: Alumno1={
    matricula1: 100,
    nombre1: 'Mario',
    edad1: 23,
    email1: 'mario@gmail.com',
    grupo1: {
        grupo: 'IDGS902',
        year: 2023
    }
}

console.log(`La matricula es: ${alumno2.matricula1}`)
console.log(`El año del grupo es: ${alumno2.grupo1.year}`)

const {matricula1, grupo1:xx} = alumno2
const {grupo,year:anio} = xx

console.log(`La matricula es: ${matricula1}`)
console.log(`El noombre es: ${alumno2.nombre1}`)
console.log(`El Grupo es: ${grupo}`)
console.log(`El año del grupo es: ${anio}`)

// Desestructuración de arreglos
const gps: string[] = ['IDGS', 'IEVN', 'REDES']
console.log(`EL grupo 1 es: ${gps[0]}`)
console.log(`EL grupo 2 es: ${gps[1]}`)
console.log(`EL grupo 3 es: ${gps[2]}`)

const[a,,b]= gps;
console.log(`EL grupo 1 es: ${a}`)