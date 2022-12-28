/**
 * TIPOS DE JS
 * number
 * string
 * boolean
 * null
 * undefined
 * object
 * function
 */

/**
 * TIPOS DE TS
 * any
 * unknown
 * never
 * arrays
 * tuplas
 * Enums
 *
 * tipos inferidos
 */


// BASIC
let hola: Function
let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos = true;
extintos = false;
let mivariable;


// INPUT FUNCTION
function ChanchitoFeliz(config: string) {
    return config;
}

// ARRAY
let animales = ["fff", "ddd", "ddd"];
let nums = [];
let numbers: Array<number> = [1, 2, 3];
let numbers2: number[] = [1, 2, 3];


// TUPLA 
let tupla: [number, string[]] = [1, ["1", "2", "3"]]; /** ARREGLOS DEFINIDOS */


// ENUM
enum Talla {
    Chica = "s",
    Mediana = "m",
    Grande = "l",
    ExtraGrande = "xl",
}
const variable = Talla.Grande;
const enum LoadingState {
    Idle,
    Loading,
    Success,
    Error,
}
const estado = LoadingState.Success;


// TYPE
type Direccion = {
    numero: number;
    calle: string;
    pais: string;
};


// TYPE WITH ENUM AND OTHER TYPE
type Persona = {
    readonly id: number;
    nombre: string;
    talla: Talla;
    direccion?: Direccion;
};


// OBBJETO
const objeto: Persona = {
    id: 1,
    nombre: "",
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: "Siempre viva",
        pais: "Panama",
    },
};
objeto.nombre = "Carlos";
console.log(objeto);


// ARRAY WITH TYPE
const arr: Persona[] = [];


// FUNCTION RETURN TYPE
const fn: () => void = () => { };
function fn1(): number {
    let x = 2;
    if (x > 5) {
        return 7;
    }
    return 0;
}
const fn3: (a: number) => string = (edad: number) => {
    if (edad < 18)
        return "No puedes ingresar"
    return "Bienvenido"
}
function validarEdad(edad: number, name: string = 'usuario'): string {
    if (edad < 18)
        return `No puedes ingresar ${name}`
    return "Bienvenido"
}
validarEdad(23, "Luis")
validarEdad(23)


// NEVER
function ErrorUsuario(): never {
    throw new Error('error de usuario')
}


// UNION TYPE
let puntaje: number | string = 98
puntaje = 'hola'
type Animal = {
    id: number,
    estado: string
}
type Usuario = {
    id: number,
    name: string
}
let animal: Animal | Usuario = { id: 1, estado: '' }
function sumaDos(n: number | string): number {
    if (typeof (n) === 'number') {
        return n + 2
    }
    return parseInt(n) + 2
}
console.log(sumaDos(3))


// INTERSECTION TYPE
type Audit = {
    created_at: string;
    modified_at: string;
}

type Product = {
    name: string;
}

const product: Audit & Product = { created_at: '', modified_at: '', name: '' }


// LITERLA TYPE
type Fibo = 0 | 1 | 2 | 3 | 5;
const nDeFibo: Fibo = 3;


// NULLABLE TYPES
function toNumber(s: string | null | undefined) {
    if (!s) {
        return 0
    }
    return parseInt(s)
}

const n = toNumber(undefined)


// OPTIONAL CHAINING
function getUser(id: number) {
    if (id < 0) {
        return null
    }
    return {
        id: 1,
        name: 'Felipe',
        created_at: new Date()
    }
}
const user = getUser(-1)
console.log('Usuario:' + user?.created_at)
const arr1 = null
console.log(arr1?.[0])
const fn5: any = null
fn5?.()


// NULLISH COALESCING OPERATOR
const difficulty: number | null = 0
const user2 = {
    username: 'Chanchito Feliz',
    difficulty: difficulty ?? 1,
}
console.log(user2)


// TYPE ASSERTION
const elem: any = null
const elem1 = elem as number
// SIRVE CUANDO
// const input = document.getElementById('username') as HTMLInputElement
// const input2 = <HTMLInputElement>document.getElementById('username')
// input.value


// TYPE NARROWING
function Separar(x: string | number) {
    if (typeof (x) === 'number') {

    }
    if (typeof (x) === 'string') {

    }
}


// TYPE UNKNOWN
function Proceso(algo: unknown) {
    if (typeof(algo) === 'string'){

    }
    if (typeof(algo) === 'number'){

    }
    if (algo instanceof String){
        // algo?.haceCosas()
        // algo?.OtrasCosas()
        // algo?.genkidama()
    }
}