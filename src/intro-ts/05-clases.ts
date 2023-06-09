
class Persona2{
    nombre:string;
    apellido:string;
    edad:number;
    
    constructor(nombre:string, apellido:string, edad:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

let persona2 = new Persona2('Mario', 'Gonzalez', 23);
persona2.saludar();

// Modificadores de acceso
class Dado{
    private valor:number=0;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`El valor del dado es: ${this.valor}`);
    }
}

let dado = new Dado();
dado.tirar();
dado.imprimir();

// clase 2

class Persona3{
    constructor(public nombre:string, public apellido:string, public edad:number){}
    saludar(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

let persona3 = new Persona3('Mario', 'Gonzalez', 23);
persona3.saludar();