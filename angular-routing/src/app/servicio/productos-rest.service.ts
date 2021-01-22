import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../dominio/producto';

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
    // tslint:disable-next-line: no-bitwise
    const jsonString = JSON.stringify(producto, null, 4);
    console.log(`In ProductosRestService, product send is: ${jsonString}`);
    return this.http.put<Producto>(`http://localhost:3000/productos/${producto.id}`, producto);
  }

  public findByConcepto(concepto: string): Observable<Producto[]> {

    return this.http.get<Producto[]>(`http://localhost:3000/productos/filtro/${concepto}`);

  }

  public findById(id: string): Observable<Producto> {
    return this.http.get<Producto>(`http://localhost:3000/productos/detalle/${id}`);
  }

}
