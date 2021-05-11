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

  //NGMODEL
  busquedaArticulo:string;
  articulosEncontrados:Array<Articulo> = new Array<Articulo>();

  //array de articulos para el pedido
  articulosEnElPedido:Array<[Articulo,number]> = new Array<[Articulo,number]>();

  //1 pedido que es el que va a hacer el submit

  constructor(fb: FormBuilder, private articuloService: ArticuloService) {
    this.form = fb.group({
      "pedName": ["", Validators.required],
      "pedDate": ["", Validators.required]
    });
  }

  ngOnInit(): void {
    //GET LISTA ARTICULOS en array de articulos para el pedido
  }

  onChange(){
    this.articuloService.getLikedArticuloList(this.busquedaArticulo).subscribe(
      lista=>{
        if (this.busquedaArticulo == ""){
          this.articulosEncontrados = [];
        }else{
          this.articulosEncontrados = lista;
        }

      }
    )
  }

  addArticulo(art:Articulo, cantidad:number){
    //TODO
    //UPDATE EL STOCK DEL ARTICULO
    console.log(art, cantidad)

    if (cantidad > art.stock){
      alert("No tenemos tanto stock!!")
    }else{
      let nuevoStock:number = art.stock - cantidad;
      let articuloActualizado:Articulo = new Articulo(art.nombre,art.precio, nuevoStock, art.id);
      this.articuloService.updateArticulo(articuloActualizado).subscribe(
        ok=> console.log(ok)
      )
    }

    //if no hay suficiente, mostrar alerta
  }

  //fabricar pedido

  onSubmit() {

    if (this.form.valid) {
      //fabricar pedido
      //atributo pedido
      //TODO PUT NEW PEDIDO

      console.log(this.form.value["pedDate"].replaceAll("-","/"));

    } else {
      alert("No pueden haber campos vacíos");
    }

  }

}
