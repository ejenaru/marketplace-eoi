import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ConsultarArticuloComponent } from './componentes/consultar-articulo/consultar-articulo.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoArticuloComponent } from './componentes/nuevo-articulo/nuevo-articulo.component';
import { PanelPrincipalComponent } from './componentes/panel-principal/panel-principal.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'articulos',
    component: ArticulosComponent
  },
  {
    path: 'pedidos',
    component: PedidosComponent
  },
  {
    path: 'articulos/nuevoArticulo',
    component: NuevoArticuloComponent
  },
  {
    path: 'articulos/consultarArticulos',
    component: ConsultarArticuloComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
