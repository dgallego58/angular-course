import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../dominio/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  public login(usuario: Usuario): Observable<Usuario>{

    return this.httpClient.post<Usuario>(`http://localhost:3000/login`, usuario);
  }

}
