import { Component, OnInit } from '@angular/core';

export enum page{
  INICIO = "inicio",
  NUEVO = "nuevo",
  CONSULTAR = "consultar"
}

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

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
