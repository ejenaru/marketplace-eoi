import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  @Input() art: Articulo;
  //@Input() mapa = new Map();

  cantidadArticulo: number = 0;
  
  closeResult: string;

  constructor(private articuloService: ArticuloService, private pedidoService: PedidoService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.getCantidadTotal();
  }

  getCantidadTotal(): void {

    this.pedidoService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {

        for (const pedido of pedidos) {
          for (const articulo of pedido.articulos) {
            if (this.art.id === articulo.id) {
              this.cantidadArticulo += articulo.cantidad;
            }
          }
        }

      },
      error => console.error(error)
    )

  }

  async deleteArticulo(articulo: Articulo) {

    await this.articuloService.deleteArticulo(articulo.id);
    alert("El artículo " + articulo.nombre + " ha sido eliminado");

  }

  //Abre el dialog Actualizar
  open(content) {
    this.modal.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  onSubmit(f: NgForm) {

    // if (f.value.artName === undefined || f.value.artPrice === undefined || f.value.artStock === undefined) {

    //   //Este caso pasa cuando se abre el dialog y sin hacer cambios se le da a Actualizar
    //   //Así se cierra el dialog manteniendo los datos que había antes
      
    // } else 
    if (f.value.artName === "" || f.value.artPrice === "" || f.value.artStock === "" || f.value.artName === null || f.value.artPrice === null || f.value.artStock === null) {

      alert('No puede haber campos vacíos');
      
    } else if (f.value.artPrice < 0 || f.value.artStock < 0) {

      alert('El precio o el stock no pueden ser negativos');
      
    } else {

      this.art = new Articulo(f.value.artName, f.value.artPrice, f.value.artStock, this.art.id);
      this.articuloService.updateArticulo(this.art).subscribe();

    }
    
    this.modal.dismissAll();
  }


}
