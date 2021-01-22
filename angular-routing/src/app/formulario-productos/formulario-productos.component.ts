import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Producto } from '../dominio/producto';
import { ProductosRestService } from '../servicio/productos-rest.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  productoNuevo: Producto;
  constructor(public servicio: ProductosRestService, public router: Router) {
    this.productoNuevo = new Producto(0, '', 0, '');
  }

  ngOnInit(): void {
  }


  addProduct(producto: Producto): void {
    this.servicio.createInsert(producto).subscribe(
      () => this.router.navigate(['/lista']));
  }


}
