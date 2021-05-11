import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  form: FormGroup;

  //NGMODEL

  //array de articulos para el pedido

  pedido: Pedido;

  constructor(fb: FormBuilder, private articuloService: ArticuloService, private pedidoService: PedidoService, private authService: AuthService) {
    this.form = fb.group({
      "pedName": ["", Validators.required],
      "pedDate": ["", Validators.required]
    });
  }

  ngOnInit(): void {
    //GET LISTA ARTICULOS en array de articulos para el pedido
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

  addArticulo(){
    //TODO
  }

  postPedido(pedido: Pedido) {

    this.pedidoService.addPedido(pedido).subscribe(
      (pedido: Pedido)  => {
        console.log(pedido);
        alert('Se ha creado el pedido ' + pedido.nombre);
      },
      error => console.error(error)
    )

  }

  onSubmit() {

    if (this.form.valid) {
      //fabricar pedido
      //atributo pedido
      //TODO PUT NEW PEDIDO

      this.pedido = {
        idUsuario: this.authService.getUserID,
        nombre: this.form.value["pedName"],
        fecha: this.form.value["pedDate"],
        articulos: [{
          id: 1,
          cantidad: 12
        }]
      };

      console.log(this.authService.getUserID);

      console.log(this.form.value["pedDate"].replaceAll("-","/"));

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
