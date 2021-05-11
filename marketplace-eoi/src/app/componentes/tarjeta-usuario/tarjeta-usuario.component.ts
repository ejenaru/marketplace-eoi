import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-tarjeta-usuario',
  templateUrl: './tarjeta-usuario.component.html',
  styleUrls: ['./tarjeta-usuario.component.css']
})
export class TarjetaUsuarioComponent implements OnInit {

  @Input() user: Usuario;

  listaPedidos: Array<Pedido> = new Array<Pedido>();

  articulosTotal: Map<Articulo, number> = new Map<Articulo, number>();

  top3:Array<Articulo>;


  constructor(private userService:UsuarioService, private pedidoService:PedidoService,
    private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.getArrayPedidos(this.user.id);
  }

  //Devuelve todos los pedidos del usuario en cuestion
  getArrayPedidos(id:number){
    this.pedidoService.getPedidosFromUser(id).subscribe(
      ok=>{
        this.listaPedidos = ok;
        this.getMapArticulos();
      }
    );
  }

  getMapArticulos(){
    
    for (const pedido of this.listaPedidos) {
      for (const art of pedido.articulos) {
        this.articuloService.getArticuloWithID(art.id).subscribe(
          articulo=>{
            
            if (!this.articulosTotal.has(articulo)) {
              //Si no está, añade el nuevo artículo y su cantidad
              this.articulosTotal.set(articulo,art.cantidad);
            } else {
              //Si ya está, lo busca en el mapa y suma la nueva cantidad
              let total = this.articulosTotal.get(articulo) + art.cantidad;
              this.articulosTotal.set(articulo, total);
            }
            this.getTop3();
          }
        )
      }
    }
  }

  borrar(){
    this.userService.deleteUser(this.user.id).subscribe(
      ok => alert("Usuario Borrado correctamente")
    );
    
  }

  actualizar(){

  }

  

  getTop3(){
    //sort toma como parámetro una función que devuelve <0 si los valores no están ordenados
    //>0 si los valores están ordenados
    //0 si son iguales.
    //Es una función que te permite ordenar objetos que no son "ordenables" de por sí
    const mapSort = new Map([...this.articulosTotal.entries()].sort(
      (a,b)=> b[1] - a[1])
      );
    this.top3= Array.from(mapSort.keys()).slice(0,3);
  }



}
