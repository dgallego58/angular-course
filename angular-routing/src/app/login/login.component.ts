import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../dominio/usuario';
import { JwtTokenService } from '../servicio/jwt-token.service';
import { LoginService } from '../servicio/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: Usuario;
  constructor(private loginService: LoginService, private router: Router, private jwt: JwtTokenService) { }

  ngOnInit(): void {
    this.usuario = {
      nombre: '',
      clave: ''
    }
  }


  login(usuario: Usuario) {
    console.log(usuario);
    this.loginService.login(usuario).subscribe(data => {
      console.log(data.token);
      this.jwt.token = data.token;
      this.router.navigate(['/lista']);
    });
  }







}
