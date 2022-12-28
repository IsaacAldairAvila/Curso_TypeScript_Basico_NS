/**Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

abstract class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number
    ) { }
    get fullYear() {
        return this.created_at.getFullYear()
    }
    get fullDesc() {
        return this.name + ' ' + this.desc
    }
    abstract guardar():void;
}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(
            name,
            desc,
            created_at,
            created_by
        )
    }
    override get fullDesc(): string {
        return 'Producto: ' + super.fullDesc
    }
    override guardar(): void {
        console.log(`guardar`)
    }
}

class Categoria extends DatosBasicos {
    public productos: Producto[] = []
    constructor(
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) {
        super(
            name,
            desc,
            created_at,
            created_by
        )
    }
    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    }
    override get fullDesc(): string {
        return 'Categoria: ' + super.fullDesc
    }

    override guardar(): void {
        console.log(`guardar`)
    }
}

let producto1 = new Producto(
    100,
    1,
    'iPhone',
    'Mobile',
    new Date(),
    4
)

let categoria = new Categoria(
    'Celulares',
    'Mobile',
    new Date(),
    4
)

categoria.agregarProducto(producto1)

console.log(producto1.fullDesc, categoria.fullDesc)
producto1.guardar()