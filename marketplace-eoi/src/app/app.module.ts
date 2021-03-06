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
import { NuevoPedidoComponent } from './componentes/nuevo-pedido/nuevo-pedido.component';
import { ConsultarPedidoComponent } from './componentes/consultar-pedido/consultar-pedido.component';
import { TarjetaPedidoComponent } from './componentes/tarjeta-pedido/tarjeta-pedido.component';
import { TarjetaArticuloComponent } from './componentes/tarjeta-articulo/tarjeta-articulo.component';
import { TotalesPipe } from './pipes/totales.pipe';
import { MatDialogModule } from 'angular-material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



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
    TarjetaUsuarioComponent,
    NuevoPedidoComponent,
    ConsultarPedidoComponent,
    TarjetaPedidoComponent,
    TarjetaArticuloComponent,
    TotalesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
