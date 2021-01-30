import { ProductosRestService } from './../servicio/productos-rest.service';

import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  lista: Producto[] = [];

  productoEditado: Producto;
  filtroConcepto = '';

  //pulsaste
  keyUP = new Subject<KeyboardEvent>();

  constructor(public servicio: ProductosRestService, public router: Router) {
    //this.lista = servicio.findAll();

    this.productoEditado = new Producto(0, '', 0, '');
    this.keyUP
      .pipe(
        map((event: any) => {
          return event.target.value;
        })
      )
      .pipe(
        mergeMap((texto) => {
          //peticion asincrona
          //es peculiar
          return this.servicio.findByConcepto(texto);
        })
      )
      .subscribe((datos) => {
        this.lista = datos;
      });
  }

  ngOnInit(): void {
    this.servicio.buscarTodos().subscribe((datos) => {
      console.log(datos);
      this.lista = datos;
    });
  }

  detalleProducto(producto: Producto) {
    this.router.navigate(['detalle', producto.id]);
  }

  editar2(producto: Producto) {
    this.router.navigate(['formularioEdicion', producto.id]);
  }

  borrarProducto(producto: Producto): void {
    //lo que quiero invoco otro observable
    let prodId: string = producto.id!.toString();
    this.servicio
      .borrar(prodId)
      .pipe(mergeMap(() => this.servicio.buscarTodos()))
      .subscribe((datos) => {
        console.log('elemento borrado');
        this.lista = datos;
      });
  }

  edicionRapida(producto: Producto): void {
    this.productoEditado = producto;
  }

  updateProduct(producto: Producto): void {
    console.log('vamos a salvar el producto %0', producto);

    this.servicio
      .actualizar(producto, producto.id!.toString())
      .pipe(mergeMap(() => this.servicio.buscarTodos()))
      .subscribe((data) => {
        console.log(`login stuff ${JSON.stringify(data, null, 4)}`);
        this.lista = data;
      });
  }

  //eventos output
  borrarProductoEvento(producto: Producto): void {
    console.log(producto);
    this.borrarProducto(producto);
  }

  detalleProductoEvento(producto: Producto): void {
    this.detalleProducto(producto);
  }

  edicionRapidaEvento(producto: Producto): void {
    this.edicionRapida(producto);
  }

  edicion2Evento(producto: Producto): void {
    this.editar2(producto);
  }

  salvarProductoEvento(producto: Producto): void {
    this.updateProduct(producto);
  }
}
