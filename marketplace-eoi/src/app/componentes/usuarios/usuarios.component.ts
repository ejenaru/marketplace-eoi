import { Component, OnInit } from '@angular/core';

export enum page{
  INICIO = "inicio",
  NUEVO = "nuevo",
  CONSULTAR = "consultar"
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  
  actualPage: page;


  constructor() {
    
   }

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
