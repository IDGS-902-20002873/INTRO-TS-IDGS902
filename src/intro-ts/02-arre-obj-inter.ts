
let vector1: Array<number> = [9,8,7,6]
vector1.push(10)
vector1[1] = 20
for(let elemento of vector1)
    console.log(elemento)

let tempo:(string|number)[]=[]
tempo.push('hola')
tempo.push(100)

interface Alumno{
    matricula?: number;
    nombre: string;
    edad: number;
    email: string;
}

const alumnoNuevo: Alumno={
    matricula: 100,
    nombre: 'Mario',
    edad: 89,
    email: 'mario@gmail.com'
}
