import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  getUserWithID(id:number):Observable<Usuario>{
    //---------------------Adquiere Un solo item del servidor REST
    //---------GET--------- Devuelve un "observable" al que hay que subscribirse
    //---------------------Lo devolvemos para poder utilizarlo luego 
    return this.http.get<Usuario>(`${environment.BACKEND_URL}/usuario/${id}`);
  }

  addUser (usuario:Usuario):Observable<Usuario>{
    //---------------------Publica Un solo item al servidor REST
    //---------POST-------- Devuelve un "observable" al que hay que subscribirse
    //---------------------Devuelve la respuesta con el usuario creado 
    return this.http.post<Usuario>(`${environment.BACKEND_URL}/usuario`, usuario, this.httpOptions);
  }

  updateUser(usuario:Usuario):Observable<Usuario>{
    //---------------------Actualiza Un solo item al servidor REST
    //---------POST-------- Devuelve un "observable" al que hay que subscribirse
    //---------------------Devuelve el usuario nuevo 
    return this.http.put<Usuario>(`${environment.BACKEND_URL}/usuario/${usuario.id}`, usuario, this.httpOptions);
  }

  deleteUser(id:number):Observable<Usuario>{
    //---------------------Elimina Un solo item al servidor REST
    //-------DELETE-------- Devuelve un "observable" al que hay que subscribirse
    //---------------------Devuelve la respuesta 
    return this.http.delete<Usuario>(`${environment.BACKEND_URL}/usuario/${id}`);
  }

  getUserList():Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>(`${environment.BACKEND_URL}/usuario`);
  }
}
