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
  busquedaArticulo: string;
  articulosEncontrados: Array<Articulo> = new Array<Articulo>();

  //array de articulos para el pedido
  articulosEnElPedido: Map<number, number> = new Map<number, number>();

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

  getArticulosEnElPedido() {
    return Array.from(this.articulosEnElPedido.entries());
  }

  onChange() {
    this.articuloService.getLikedArticuloList(this.busquedaArticulo).subscribe(
      lista => {
        if (this.busquedaArticulo == "") {
          this.articulosEncontrados = [];
        } else {
          this.articulosEncontrados = lista;
        }

      }
    )
  }

  precioLineas: Map<number, number> = new Map<number, number>();

  addArticulo(art: Articulo, cantidad: number) {
    //TODO
    //UPDATE EL STOCK DEL ARTICULO
    cantidad = Number(cantidad);

    if (cantidad > art.stock) {
      alert("¡¡No tenemos tanto stock!!")
    } else if (cantidad <= 0) {
      alert("No ha añadido nada")
    } else {
      this.setCantidad(art, cantidad);
      let nuevoStock: number = art.stock - cantidad;
      let articuloActualizado: Articulo = new Articulo(art.nombre, art.precio, nuevoStock, art.id);
      this.articuloService.updateArticulo(articuloActualizado).subscribe(
        ok => {
          console.log(ok)
          alert(`Ha añadido ${cantidad} ud de ${ok.nombre}`)
          this.onChange();
        }
      )

      //Rellenar Map de preciosLineas
      if (this.precioLineas.has(art.id)) {

        this.precioLineas.set(art.id, this.precioLineas.get(art.id) + cantidad * art.precio);

      } else {

        this.precioLineas.set(art.id, cantidad * art.precio);

      }



    }

    //if no hay suficiente, mostrar alerta
  }

  setCantidad(art: Articulo, cantidad: number) {
    if (!this.articulosEnElPedido.has(art.id)) {
      this.articulosEnElPedido.set(art.id, cantidad)
    } else {
      let nuevaCantidad: number = (this.articulosEnElPedido.get(art.id) + cantidad);
      console.log(nuevaCantidad)
      this.articulosEnElPedido.set(art.id, nuevaCantidad)

    }

  }

  postPedido(pedido: Pedido) {

    this.pedidoService.addPedido(pedido).subscribe(
      (pedido: Pedido) => {
        console.log(pedido);
        alert('Se ha creado el pedido ' + pedido.nombre);
      },
      error => console.error(error)
    )

  }

  //pruebaMap: Array<[number,number]>;

  onSubmit() {

    if (this.form.valid) {

      //this.pruebaMap = Array.from(this.articulosEnElPedido.entries());

      this.pedido = new Pedido(this.authService.getUserID,
        this.form.value["pedName"],
        this.form.value["pedDate"].replaceAll("-", "/"),
        this.getArticulosEnElPedido());

      //console.log(this.pedido);
      //console.log(this.articulosEnElPedido);
      this.postPedido(this.pedido);


      //console.log(this.form.value["pedDate"].replaceAll("-","/"));

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
