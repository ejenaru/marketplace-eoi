import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/clases/articulo';
import { ArticuloService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, private articuloService: ArticuloService) {
    this.form = fb.group({
      "pedName": ["", Validators.required],
      "pedDate": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  listaArticulosPrueba: Array<Articulo> = [
    {
      "nombre": "Artículo 1",
      "precio": 10,
      "stock": 15,
      "id": 1
    },
    {
      "nombre": "Artículo 2",
      "precio": 2,
      "stock": 10,
      "id": 2
    },
    {
      "nombre": "Artículo 3",
      "precio": 2,
      "stock": 10,
      "id": 3
    }
  ];

  onSubmit() {

    if (this.form.valid) {

      console.log(this.form.value["pedDate"]);

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
