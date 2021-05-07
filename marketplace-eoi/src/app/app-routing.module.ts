import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { ConsultarUsuarioComponent } from './componentes/consultar-usuario/consultar-usuario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
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
    path: 'usuarios/nuevoUsuario',
    component: NuevoUsuarioComponent
  },
  {
    path: 'consultarUsuario',
    component: ConsultarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
