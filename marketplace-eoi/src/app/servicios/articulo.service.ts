import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment'
import { Articulo } from '../clases/articulo';
@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  
  getArticuloWithID(id:number):Observable<Articulo>{
    //GET
    return this.http.get<Articulo>(`${environment.BACKEND_URL}/articulo/${id}`);
  }

  addArticulo (articulo:Articulo):Observable<Articulo>{
    //POST
    return this.http.post<Articulo>(`${environment.BACKEND_URL}/articulo`, articulo, this.httpOptions);
  }

  updateArticulo(articulo:Articulo):Observable<Articulo>{
    //POST
    return this.http.put<Articulo>(`${environment.BACKEND_URL}/articulo/${articulo.id}`, articulo, this.httpOptions);
  }

  deleteArticulo(id:number):Observable<Articulo>{
    //DELETE
    return this.http.delete<Articulo>(`${environment.BACKEND_URL}/articulo/${id}`);
  }

  getArticuloList():Observable<Array<Articulo>>{
    return this.http.get<Array<Articulo>>(`${environment.BACKEND_URL}/articulo`);
  }
}
