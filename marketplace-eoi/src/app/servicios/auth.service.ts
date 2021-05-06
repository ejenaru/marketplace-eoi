import { Injectable, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  private isLogged:boolean;
  private userLogged:Usuario;
  //Esto tb es un fallo de seguridad porque estoy almacenando la contraseña sin cifrar en local

  constructor() {
    this.isLogged = false;
   }

  ngOnInit(){
    
  }

  setIsLogged(log:boolean){
    //Esto es un pedazo de fallo de seguridad que flipas porque se puede
    //modificar desde local PERO BUENO
    this.isLogged = log;
  }
  setUserLogged(user:Usuario){
    this.userLogged = user;
  }

  get getUserID():number{
    return this.userLogged.id;
  }
  get getUserName():string{
    return this.userLogged.nombre;
  }

  get getIsLogged():boolean{
    return this.isLogged;
  }
}
