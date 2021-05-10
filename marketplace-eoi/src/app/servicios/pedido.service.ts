import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { Pedido } from '../clases/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  getPedidoWithID(id:number):Observable<Pedido>{
    //GET
    return this.http.get<Pedido>(`${environment.BACKEND_URL}/pedido/${id}`);
  }

  addPedido (pedido:Pedido):Observable<Pedido>{
    //POST
    return this.http.post<Pedido>(`${environment.BACKEND_URL}/pedido`, pedido, this.httpOptions);
  }

  updatePedido(pedido:Pedido):Observable<Pedido>{
    //POST
    return this.http.put<Pedido>(`${environment.BACKEND_URL}/pedido/${pedido.id}`, pedido, this.httpOptions);
  }

  deletePedido(id:number):Observable<Pedido>{
    //DELETE
    return this.http.delete<Pedido>(`${environment.BACKEND_URL}/pedido/${id}`);
  }

  getPedidoList():Observable<Array<Pedido>>{
    return this.http.get<Array<Pedido>>(`${environment.BACKEND_URL}/pedido`);
  }

  getPedidosFromUser(id:number):Promise<Array<Pedido>>{
    return this.http.get<Array<Pedido>>(`${environment.BACKEND_URL}/pedido?idUsuario=${id}`).toPromise();
  }

}
