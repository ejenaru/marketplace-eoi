import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { Articulo } from '../../clases/articulo';

@Component({
  selector: 'app-consultar-articulo',
  templateUrl: './consultar-articulo.component.html',
  styleUrls: ['./consultar-articulo.component.css']
})
export class ConsultarArticuloComponent implements OnInit {

  artConsulting: string;
  listaArticulos: Array<Articulo>;

  constructor(private articuloService: ArticuloService) { }

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

  ngOnInit(): void {
  }

}
