class PilaEnteros {
    private vec: number[] = [];
    insertar(valor: number) {
        this.vec.push(valor);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

class PilasString {
    private vec: string[] = [];
    insertar(valor: string) {
        this.vec.push(valor);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pilaEnteros = new PilaEnteros();
pilaEnteros.insertar(10);
pilaEnteros.insertar(20);
pilaEnteros.insertar(30);
console.log(pilaEnteros.extraer());

let pilaString = new PilasString();
pilaString.insertar('Hola');
pilaString.insertar('Mundo');
pilaString.insertar('!!');
console.log(pilaString.extraer());

// Genericos
class Pila<T>{
    private vec: T[] = [];
    insertar(valor: T) {
        this.vec.push(valor);
    }
    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null;
    }
}

let pilaEnteros2 = new Pila<number>();
pilaEnteros2.insertar(10);
pilaEnteros2.insertar(20);
pilaEnteros2.insertar(30);
console.log(pilaEnteros2.extraer());

let pilaString2 = new Pila<string>();
pilaString2.insertar('Hola');
pilaString2.insertar('Mundo');
pilaString2.insertar('!!');
console.log(pilaString2.extraer());

