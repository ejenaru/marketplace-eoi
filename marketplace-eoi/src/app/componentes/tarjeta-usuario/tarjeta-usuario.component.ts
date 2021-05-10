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

  articulosTotal: Array<Articulo>;


  constructor(private userService:UsuarioService, private pedidoService:PedidoService,
    private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.getArrayPedidos(this.user.id);
    
    //this.articulosTotal = this.getEveryArticulosID();
    console.log(this.articulosTotal)
  }

  //Devuelve todos los pedidos del usuario en cuestion
  async getArrayPedidos(id:number){
    this.listaPedidos = await this.pedidoService.getPedidosFromUser(id);
  }

  // getEveryArticulosID():Array<Articulo>{
  //   let totalArticulos: Array<Articulo> = new Array<Articulo>();

  //   for (let pedido of this.listaPedidos){
  //     for (let articulo of pedido.articulos){
  //       totalArticulos.push(this.getArticuloWithID(articulo.id));
  //     }
  //   }
  //   return totalArticulos;
  // }

  // getArticuloWithID(id:number): Articulo{
  //   let articulo:Articulo;

  //   this.articuloService.getArticuloWithID(1).subscribe(
  //     ok => console.log(ok)
  //   )
  //   return articulo;

  // }

  borrar(){
    this.userService.deleteUser(this.user.id).subscribe(
      ok => console.log(ok)
    );
    alert("Usuario Borrado correctamente");
  }

  actualizar(){

  }



}
