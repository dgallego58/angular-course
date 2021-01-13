import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  nombre: string = "Pedro";
  paisaje: string = "assets/paisaje1.jpg"
  contador: number = 0;
  persona!: Persona;

  constructor() { }

  ngOnInit(): void {
    this.persona = new Persona("Pedro", "Picapiedra", 270);
  }

  incrementar(): number {
    this.contador++;
    return this.contador;
  }

  decrementar(): number {
    this.contador--;
    return this.contador;
  }

}
