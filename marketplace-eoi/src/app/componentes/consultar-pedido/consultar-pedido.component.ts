import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit {
  nombrePedido:string;

  listaPedidos: Array<Pedido>;

  constructor(private pedidoService:PedidoService) {}

  ngOnInit(): void {
    
  }
  onChange(){
    if(this.nombrePedido == ""){
      this.listaPedidos = [];
    }else{
      this.getArrayPedidos(this.nombrePedido);
    };
  }

  getArrayPedidos(name:string){
    this.pedidoService.getPedidoLike(name).subscribe(
      ok => {this.listaPedidos = ok}
    )
  }


}
