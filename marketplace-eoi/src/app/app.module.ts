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
import { NuevoArticuloComponent } from './componentes/nuevo-articulo/nuevo-articulo.component';
import { ConsultarArticuloComponent } from './componentes/consultar-articulo/consultar-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelPrincipalComponent,
    UsuariosComponent,
    ArticulosComponent,
    PedidosComponent,
    NuevoArticuloComponent,
    ConsultarArticuloComponent
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
