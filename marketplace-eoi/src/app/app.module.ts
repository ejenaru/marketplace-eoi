import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelPrincipalComponent } from './componentes/panel-principal/panel-principal.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';
import { NuevoUsuarioComponent } from './componentes/nuevo-usuario/nuevo-usuario.component';
import { ConsultarUsuarioComponent } from './componentes/consultar-usuario/consultar-usuario.component';
import { NuevoArticuloComponent } from './componentes/nuevo-articulo/nuevo-articulo.component';
import { ConsultarArticuloComponent } from './componentes/consultar-articulo/consultar-articulo.component';
import { TarjetaUsuarioComponent } from './componentes/tarjeta-usuario/tarjeta-usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelPrincipalComponent,
    UsuariosComponent,
    ArticulosComponent,
    PedidosComponent,
    NuevoUsuarioComponent,
    ConsultarUsuarioComponent,
    NuevoArticuloComponent,
    ConsultarArticuloComponent,
    TarjetaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
