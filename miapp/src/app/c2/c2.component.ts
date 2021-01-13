import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  personas!: Persona[];

  constructor() { }

  ngOnInit(): void {
    this.personas = [];
    this.personas.push(new Persona("Pedro", "Perez", 30), new Persona("Ana", "Cleto", 40));
  }

}
