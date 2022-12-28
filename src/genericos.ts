/*
function log<T, V>(a: T, b: V): V {
    console.log(a, b)
    return b
}
log<string, number>('dato', 3)
log<string, string>('dato', 'chanchito')
*/
async function fetchData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`)
    return respuesta.json()
}

type User = {
    id: string,
    name: string
}


async function main() {
    const newuser = await fetchData<User>('/usuario')
    // console.log(newuser.id)
}

type Computador = {
    encender: () => void
    apagar: () => void
}
class Programador<T> {
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

const programador = new Programador<Computador>({
    encender: () => { },
    apagar: () => { }
})

const programador1 = new Programador<string>('Hola mundo!')

// programador1.computador.includes('a')

interface KeyValue<T, V> {
    key: T,
    value: V
}

interface Products {
    id: string
}

function fetchProduct(): KeyValue<string, Products> {
    return {
        key: 'id de producto',
        value: { id: 'id de producto' }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: 'id de producto',
        value: 5
    }
}

interface Usuarios {
    id: string,
    name: string
}

class NewUsuarios {
    constructor(
        public id: string
    ) { }
}


function print<T extends Usuarios>(t: T): T {
    console.log(t)
    return t
}

// function print<T extends NewUsuarios>(t:T):T{
//     console.log(t)
//     return t
// }

print({ id: '3', name: 'Carlos' })

class Estado<T>{
    protected data: T[] = [];
    agregar(t: T): void {
        this.data.push(t)
    }
    getEstado(): T[] {
        return this.data
    }
}

type ObjectId = {
    id: string
}

class Estadoeliminar<T extends ObjectId> extends Estado<T>{
    eliminar(id: string) {
        this.data.filter(x => x.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuarios>{
    reiniciarContrasennas() {

    }
}

type Calendar = {
    id: number,
    fuente: string,
    duenno: string
}

const calendar: Calendar = { id: 1, fuente: 'Google', duenno: 'yo' }
function getProp<T>(objeto: T, property: keyof T): unknown {
    return objeto[property]
}

type Punto = {
    x: number,
    y: number,
    desc?: string
}

type PuntoOpcional = Partial<Punto>
type PuntoRequerido = Required<Punto>
const keyVal: Record<string, number> = {
    'uid': 3
}

type kv = { [key: string]: number }

const p: Omit<Punto, 'desc' | 'y'> = {
    x: 1
}

const p1: Pick<Punto, 'x' | 'y'> = {
    x: 1,
    y: 1
}

const readOnlyP: Readonly<Punto> = {
    x: 3,
    y: 5,
    desc: 'descripcion'
}