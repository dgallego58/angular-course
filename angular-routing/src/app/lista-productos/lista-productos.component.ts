import { ProductosRestService } from './../servicio/productos-rest.service';

import { Component, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
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
    this.keyUP.pipe(
      map((event: any) => {
        return event.target.value;
      })).pipe(
        mergeMap(texto => {
          //peticion asincrona
          //es peculiar
          return this.servicio.findByConcepto(texto);
        })
      ).subscribe(datos => {
        this.lista = datos;
      })
  }

  ngOnInit(): void {
    this.servicio.findAll().subscribe(datos => {

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
    this.servicio.deleteProduct(producto)
      .pipe(
        mergeMap(o => this.servicio.findAll())
      )
      .subscribe(datos => {
        console.log('elemento borrado');
        this.lista = datos;
      });
  }


  productToSend(producto: Producto): void {
    this.productoEditado = producto;
  }

  updateProduct(producto: Producto): void {
    console.log('vamos a salvar el producto %0', producto);

    this.servicio.updateProduct(producto)
      .pipe(
        mergeMap(p => this.servicio.findAll())
      ).subscribe(data => {
        console.log(`login stuff ${JSON.stringify(data, null, 4)}`);
        this.lista = data;
      });
  }

}
