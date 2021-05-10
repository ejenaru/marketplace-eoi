import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Articulo } from '../../clases/articulo';

@Component({
  selector: 'app-consultar-articulo',
  templateUrl: './consultar-articulo.component.html',
  styleUrls: ['./consultar-articulo.component.css']
})
export class ConsultarArticuloComponent implements OnInit {

  artConsulting: string;
  listaArticulos: Array<Articulo>;
  listaPedidos: Array<Pedido>;

  articulosTotales: number = 0;

  constructor(private articuloService: ArticuloService, private pedidosService: PedidoService) { }

  ngOnInit(): void {
    this.pedidosService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {
        this.listaPedidos = pedidos;
        //console.log(this.listaPedidos);

        for (const pedido of pedidos) {
          for (const iterator of pedido.articulos) {

            //console.log(iterator);

            // if (iterator.id == 1) {
            //   this.articulosTotales += iterator.cantidad;
            //   console.log(this.articulosTotales);
            // }

            this.articuloService.getArticuloWithID(iterator.id).subscribe(
              (articulo: Articulo) => {
                //this.listaArticulos.push(articulo);
                console.log(articulo);
              },
              error => console.error(error)
            )




          }
        }

      },
      error => console.error(error)
    )

    //console.log(this.articulosTotales);


  }

  // async getArticulo(id: number) {

  //   let articulo: Articulo;

  //   articulo = await this.articuloService.getArticuloWithID(id);

  //   return articulo;

  // }

  modelChanged(artConsulting) {

    if (this.artConsulting == "") {
      this.listaArticulos = [];
    } else {
      this.articuloService.getLikedArticuloList(artConsulting).subscribe(
        (articulos: Array<Articulo>) => {
          console.log(this.listaArticulos);
          this.listaArticulos = articulos;
        },
        error => console.error(error)
      )
    }

  }

}
