import { ProductosRestService } from './../servicio/productos-rest.service';
import { Producto } from './../dominio/producto';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  lista: Producto[] = [];
  productoNuevo: Producto;
  productoEditado!: Producto;
  filtroConcepto = '';

  constructor(public servicio: ProductosRestService) {
    //this.lista = servicio.findAll();
    this.productoNuevo = new Producto(0, '', 0);
  }

  ngOnInit(): void {
    this.servicio.findAll().subscribe(datos => {

      console.log(datos);
      this.lista = datos;
    });
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

  addProduct(producto: Producto): void {
    this.servicio.createInsert(producto).pipe(
      //lambda vacía
      mergeMap(p => this.servicio.findAll())
    ).subscribe(data => this.lista = data);
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

  /*
  get listaFiltrada(): Producto[] {
    //función filter para filtrar la lista completa para quedar con una lista parcial
    //tal lista parcial, es la que estoy realizando un binding
    if (this.filtroConcepto == "") {
      return this.lista;
    }
    return this.lista.filter(p => p.concepto.startsWith(this.filtroConcepto));
  }*/


}
