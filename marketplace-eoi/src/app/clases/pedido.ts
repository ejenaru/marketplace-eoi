import { Articulo } from "./articulo";
import { Usuario } from "./usuario";

export class Pedido {
    id:number;
    usuario:Usuario;
    nombre:string;
    fecha:Date;
    articulos:[Articulo,number]
}
