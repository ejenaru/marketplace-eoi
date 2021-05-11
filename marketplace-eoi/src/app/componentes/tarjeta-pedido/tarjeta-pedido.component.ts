import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-tarjeta-pedido',
  templateUrl: './tarjeta-pedido.component.html',
  styleUrls: ['./tarjeta-pedido.component.css']
})
export class TarjetaPedidoComponent implements OnInit {

  @Input() ped: Pedido;

  precioTotal: number = 0;

  listaArticulos:Array<[Articulo, number]> = new Array<[Articulo, number]>();

  clickedItem: number = undefined;

  constructor(private articuloService: ArticuloService, private pedidoService:PedidoService) {
  }

  ngOnInit(): void {
    this.setArticulos();

  }

  setArticulos() {
    let total: number = 0;
    for (const item of this.ped.articulos) {
      this.articuloService.getArticuloWithID(item.id).subscribe(
        ok => {
          this.listaArticulos.push([ok,item.cantidad]);
          this.precioTotal += (ok.precio * item.cantidad);
        }
      );
    }
    
  }

  getTotal() {
    return this.precioTotal;
  }

  delete(){
    this.pedidoService.deletePedido(this.ped.id).subscribe(
      ok=> alert(`Pedido eliminado`)
    );
  }

  update(){
    //TODO
    this.pedidoService.updatePedido(this.ped).subscribe(
      ok=> alert(`Pedido ${ok.nombre} actualizado`)
    );
  }

  clickItem(id: number) {
    this.clickedItem = id;
    for (const iterator in this.listaArticulos) {

      console.log(iterator);
      
      
    }
    //console.log(this.listaArticulos.indexOf([art]));
    
  }
}
