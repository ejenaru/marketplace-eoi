import { Usuario } from "./usuario";

export class Pedido {
    id:number;
    idUsuario:number;
    nombre:string;
    fecha:string;
    articulos:Array<{
        id:number, 
        cantidad:number
    }>;

    constructor(id:number, idUsuario:number, nombre:string, fecha:string,
        articulos:Array<{id:number, cantidad:number}>){
            this.id = id;
            this.idUsuario = idUsuario;
            this.nombre = nombre;
            this.fecha = fecha;
            this.articulos = articulos;
        }
}
