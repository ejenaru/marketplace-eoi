import { Usuario } from "./usuario";

export class Pedido {
    id:number;
    idUsuario:number;
    nombre:string;
    fecha:Date;
    articulos:Array<[id:number, cantidad:number]>;

    constructor(id:number, usuario:Usuario, nombre:string, fecha:Date,
        articulos:Array<[id:number, cantidad:number]>){
            this.id = id;
            this.idUsuario = usuario.id;
            this.nombre = nombre;
            this.fecha = fecha;
            this.articulos = articulos;
        }
}
