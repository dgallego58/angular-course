import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//T objeto, K clave primaria para buscar
export class RESTService<T, K> {
  private servidor: string = 'http://localhost:3000';

  constructor(public endPoint: String, public http: HttpClient) {}

  //url genérica
  get url(): string {
    return `${this.servidor}/${this.endPoint}`;
  }

  public buscarTodos(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  public insertar(requestBody: T): Observable<T> {
    return this.http.post<T>(this.url, requestBody);
  }

  public actualizar(requestBody: T, id: K): Observable<T> {
    return this.http.put<T>(`${this.url}/${id}`, requestBody);
  }

  public borrar(id: K): Observable<T> {
    // http://localhost:3000/productos/id <- delete don't do anything
    //return this.http.delete<T>(`${this.url}/${this.id}`);

    //http://localhost:3000/productos/{:id} <- delete effective
    return this.http.delete<T>(`${this.url}/${id}`);
  }

  public buscarUnoPorId(id: K): Observable<T> {
    return this.http.get<T>(`${this.url}/${id}`);
  }
}
