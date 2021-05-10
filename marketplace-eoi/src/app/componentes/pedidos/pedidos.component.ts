import { Component, OnInit } from '@angular/core';

export enum page{
  INICIO = "inicio",
  NUEVO = "nuevo",
  CONSULTAR = "consultar"
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  actualPage: page;

  constructor() { }

  ngOnInit(): void {
    this.actualPage = page.INICIO;
  }

  toNuevo(){
    this.actualPage = page.NUEVO;
    
  }

  toConsultar(){
    this.actualPage = page.CONSULTAR;
  }

}
