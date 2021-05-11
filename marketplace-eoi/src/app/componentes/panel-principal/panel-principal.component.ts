import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/clases/articulo';
import { Pedido } from 'src/app/clases/pedido';
import { Usuario } from 'src/app/clases/usuario';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent implements OnInit {

  loggedUserName: string;

  numberOfUsers: number = 0;
  numberOfArticles: number = 0;
  numberOfOrders: number = 0;

  constructor(private authService: AuthService, private userService: UsuarioService, private articlesService: ArticuloService, private ordersService: PedidoService) { }

  ngOnInit(): void {

    this.loggedUserName = this.authService.getUserName;
    
    this.setNumberOfUsers();
    this.setNumberOfArticles();
    this.setNumberOfOrders();

  }

  setNumberOfUsers(): void {

    this.userService.getUserList().subscribe(
      (usuarios: Array<Usuario>) => {
        this.numberOfUsers = usuarios.length;
      },
      err => console.error(err)
    )

  }

  setNumberOfArticles(): void {

    this.articlesService.getArticuloList().subscribe(
      (articulos: Array<Articulo>) => {
        this.numberOfArticles = articulos.length;
      },
      err => console.error(err)
    )

  }

  setNumberOfOrders(): void {

    this.ordersService.getPedidoList().subscribe(
      (pedidos: Array<Pedido>) => {
        this.numberOfOrders = pedidos.length;
      },
      err => console.error(err)
    )

  }

  logout() {
    this.authService.setIsLogged(false);
    this.authService.setUserLogged(undefined);
  }

}
