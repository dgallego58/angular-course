import { Producto } from './../dominio/producto';
import { ProductoService } from './../servicio/producto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  lista: Producto[] = [];

  constructor(public servicio: ProductoService) {
    this.lista = servicio.findAll();
  }

  ngOnInit(): void {
  }

  borrar(producto: Producto) {
    this.servicio.deleteById(producto);
  }


}
