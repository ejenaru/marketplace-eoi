import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  @Input() art: Articulo;
  //@Input() mapa = new Map();

  cantidadArticulo: number = 0;

  constructor(private articuloService: ArticuloService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getCantidadTotal();
  }

  getCantidadTotal(): void {

    this.pedidoService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {

        for (const pedido of pedidos) {
          for (const articulo of pedido.articulos) {
            if (this.art.id === articulo.id) {
              this.cantidadArticulo += articulo.cantidad;
            }
          }
        }

      },
      error => console.error(error)
    )

  }

  async deleteArticulo(articulo: Articulo) {

    await this.articuloService.deleteArticulo(articulo.id);
    alert("El artículo " + articulo.nombre + " ha sido eliminado");

  }

}
