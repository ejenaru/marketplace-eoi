import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.css']
})
export class ConsultarUsuarioComponent implements OnInit {

  userName:string;
  listaUsuarios:Array<Usuario> = new Array<Usuario>();

  constructor(private userService:UsuarioService) { }

  ngOnInit(): void {
  }
  
  onChange(){
    if(this.userName == ""){
      this.listaUsuarios = [];
    }else{
      this.getArrayUsers(this.userName);
    };
  }

  getArrayUsers(name:string){
    this.userService.getUserLike(name).subscribe(
      ok => {this.listaUsuarios = ok}
    )
  }


}
