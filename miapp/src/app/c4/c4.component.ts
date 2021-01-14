import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  seleccionada!: Persona;
  personas: Persona[] = []
  constructor() { }

  ngOnInit(): void {
    this.personas.push(new Persona("Elver", "Galarga", 30, true, "Java"), new Persona("Masimo", "Tasimo", 25, false, "C#"), new Persona("Elma", "Frodo", 23, true, "Python"));

  }

  seleccionarPersona(persona: Persona): void {

    this.seleccionada = persona;
  }


}
