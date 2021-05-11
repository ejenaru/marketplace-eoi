import { Usuario } from "./usuario";

export class Pedido {
    id?:number;
    idUsuario:number;
    nombre:string;
    fecha:string;
    articulos:Array<{
        id:number, 
        cantidad:number
    }>;

    constructor( idUsuario:number, nombre:string, fecha:string,
        articulos:Array<[number, number]>){
            
            this.idUsuario = idUsuario;
            this.nombre = nombre;
            this.fecha = fecha;
            this.articulos = new Array<{
                id:number, 
                cantidad:number
            }>()
            for (const articulo of articulos) {
                this.articulos.push({
                    id: articulo[0],
                    cantidad: articulo[1]
                })
            }
        }
}
