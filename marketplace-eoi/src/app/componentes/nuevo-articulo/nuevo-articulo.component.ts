import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/clases/articulo';
import { ArticuloService } from 'src/app/servicios/articulo.service';

@Component({
  selector: 'app-nuevo-articulo',
  templateUrl: './nuevo-articulo.component.html',
  styleUrls: ['./nuevo-articulo.component.css']
})
export class NuevoArticuloComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder, private articuloService: ArticuloService) {
    this.form = fb.group({
      "artName": ["", Validators.required],
      "artPrice": ["", Validators.required],
      "artStock": ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  article: Articulo;

  onSubmit() {

    if (this.form.valid) {

      this.article = {
        nombre: this.form.value["artName"],
        precio: this.form.value["artPrice"],
        stock: this.form.value["artStock"]

      }

      if (this.article.precio < 0 || this.article.stock < 0) {

        alert("El precio o el stock no pueden ser inferiores a 0");
        
      } else {

        this.articuloService.addArticulo(this.article).subscribe(
          (articulo: Articulo) => {
            console.log(articulo);
            alert('Se ha creado el artículo ' + articulo.nombre);
          },
          error => console.error(error)
        )
        
      }

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
