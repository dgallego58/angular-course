import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  mostrar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  ver(): void {
    this.mostrar = true;
  }

  ocultar(): void {
    this.mostrar = false;
  }

}