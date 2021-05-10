import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { ArticuloService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  @Input() art: Articulo;

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
  }

  async deleteArticulo(articulo: Articulo) {

    await this.articuloService.deleteArticulo(articulo.id);
    alert("El artículo " + articulo.nombre + " ha sido eliminado");
    
  }

}
