export class Usuario {
    id:number
    nombre:string
    password:string

    constructor(nombre:string, password:string, id?:number){
        this.id = id;
        this.nombre = nombre;
        this.password = password;
    }
}
