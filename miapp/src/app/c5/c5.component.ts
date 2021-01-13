import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {

  lista:string[]=["hola", "que", "tal", "estas", "?"];
  seleccion!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
