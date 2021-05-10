import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css']
})
export class ConsultarPedidoComponent implements OnInit {

  clickedElement: Pedido;

  listaPedPrueba: Array<Pedido> = [
    {
      "id": 1,
      "idUsuario": 1,
      "nombre": "Ped1",
      "fecha": "12/12/2020",
      "articulos": [
        {
          "id": 1,
          "cantidad": 12
        }
      ]
    },
    {
      "id": 2,
      "idUsuario": 1,
      "nombre": "Ped2",
      "fecha": "12/12/2020",
      "articulos": [
        {
          "id": 1,
          "cantidad": 10
        }
      ]
    },
    {
      "id": 3,
      "idUsuario": 1,
      "nombre": "Ped3",
      "fecha": "12/12/2020",
      "articulos": [
        {
          "id": 2,
          "cantidad": 12
        }
      ]
    },
    {
      "id": 4,
      "idUsuario": 3,
      "nombre": "Ped4",
      "fecha": "12/12/2020",
      "articulos": [
        {
          "id": 2,
          "cantidad": 5
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  clicked(ped: Pedido) {
    this.clickedElement = ped;
  }

}
