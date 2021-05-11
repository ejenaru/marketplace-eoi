export class Articulo {
    id?:number;
    nombre: string;
    precio: number;
    stock: number;

    constructor(nombre: string, precio: number, stock: number, id?:number){
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.stock = stock;
    }

    
}
