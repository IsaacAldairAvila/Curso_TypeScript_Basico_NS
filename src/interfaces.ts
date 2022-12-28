// PARA LAS CLASES
interface Animals {
    name: string
    caminar(): void
    onomatopeya(): string
}

// PARA OBJETOS
type Animales = {
    name: string
    caminar(): void
    onomatopeya(): string
}

class Caballo implements Animals {
    name: string = 'Rocinante'
    caminar() {
        console.log(`caminando`)
    }
    onomatopeya() {
        return 'hin'
    }
}

class Cerdo implements Animals {
    name: string = 'Chanchito'
    caminar() {
        console.log(`caminando`)
    }
    onomatopeya() {
        return 'oinc'
    }
}

class Perro implements Animals {
    name: string = 'Milan'
    caminar() {
        console.log(`caminando`)
    }
    onomatopeya() {
        return 'guau'
    }
}

class Diccionario {
    [id: string]: string
}

let diccionario = new Diccionario()
diccionario['1a'] = 'hola'
console.log(diccionario)