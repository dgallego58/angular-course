import { Producto } from './../../../../angular-services/src/app/dominio/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosRestService {

  constructor(private http: HttpClient) { }


  public findAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>('http://localhost:3000/productos');
  }

  public deleteProduct(producto: Producto): Observable<Producto> {
    console.log(`el id es ${producto.id}`);
    return this.http.delete<Producto>(`http://localhost:3000/productos/${producto.id}`);
  }

  public createInsert(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>('http://localhost:3000/productos', producto);
  }

  public updateProduct(producto: Producto): Observable<Producto> {
    console.log(`this is a log, product send is: ${producto}`);
    return this.http.put<Producto>(`http://localhost:3000/productos/${producto.id}`, producto);
  }
}
