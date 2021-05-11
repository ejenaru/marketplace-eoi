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
  listaArticulos: Array<Articulo> = new Array<Articulo>();

  mapa = new Map();

  constructor(private articuloService: ArticuloService, private pedidosService: PedidoService) { }

  ngOnInit(): void {
    //Otra forma de contar los articulos de los pedidos(envia mapa al hijo).
    //this.mapArticles();
  }

  mapArticles(): void {

    this.pedidosService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {

        for (const pedido of pedidos) {
          for (const articulo of pedido.articulos) {
            if (!this.mapa.has(articulo.id)) {
              this.mapa.set(articulo.id,articulo.cantidad);
            } else {
              this.mapa.set(articulo.id,this.mapa.get(articulo.id)+articulo.cantidad);
            }
          }
        }
      },
      error => console.error(error)
    )

  }

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
