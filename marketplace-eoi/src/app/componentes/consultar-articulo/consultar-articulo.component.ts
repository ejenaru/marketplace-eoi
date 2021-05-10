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

  constructor(private articuloService: ArticuloService, private pedidosService: PedidoService) { }

  ngOnInit(): void {
    this.pedidosService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {
        console.log(pedidos);
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

  async deleteArticulo(articulo: Articulo) {

    await this.articuloService.deleteArticulo(articulo.id);
    alert("El artículo " + articulo.nombre + " ha sido eliminado");
    
  }

}
