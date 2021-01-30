import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../dominio/producto';
import { RESTService } from './rest.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosRestService extends RESTService<Producto, String> {
  constructor(public http: HttpClient) {
    super('productos', http);
  }

  public findByConcepto(concepto: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.url}/filtro/${concepto}`);
  }
}
