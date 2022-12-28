// Siempre con mayuscula la primera letra
// CLASES
class Personaje {
    private static equipo: number = 0
    // name: string
    // nivel: number
    // SOLO SE PUEDE ACCEDER DENTRO DE LA CLASE
    // private _hp: number
    // NO ES NECESARIO INICIARLA
    profesion?: string
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number
    ) {
        // this.name = name
        // this.nivel = nivel
    }
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }
    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
    // getHP(): number{
    //     return this._hp;
    // }
    get hp(): number {
        return this._hp
    }
    // CONFUNDE
    // set hp(cantidad: number) {
    //     this._hp = this._hp + cantidad
    // }

    static agregarPersonaje(): void {
        Personaje.equipo++
    }

    static getEquipo(): number {
        return Personaje.equipo
    }
}
const personaje = new Personaje(1, 'Luis', 3, 1000)
const personaje1 = new Personaje(2, 'Carlos', 3, 1000)
Personaje.agregarPersonaje()
Personaje.agregarPersonaje()
personaje.cambiarHP(-10)
console.log(personaje, personaje1)
console.log(Personaje.getEquipo())
if (personaje instanceof Personaje) {
    console.log(`personaje`)
}