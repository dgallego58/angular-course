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
  productoNuevo: Producto;
  productoEditado!: Producto;
  filtroConcepto: string = "";

  constructor(public servicio: ProductoService) {
    this.lista = servicio.findAll();
    this.productoNuevo = new Producto(0, "", 0);

  }

  ngOnInit(): void {
  }

  borrarProducto(producto: Producto) {
    this.servicio.deleteProduct(producto);
  }

  addProduct(producto: Producto) {
    this.servicio.addProduct(producto);
  }

  updateProduct(producto: Producto) {
    this.productoEditado = producto;

    console.log("vamos a salvar el producto %0", producto);
  }

  get listaFiltrada(): Producto[] {
    //función filter para filtrar la lista completa para quedar con una lista parcial
    //tal lista parcial, es la que estoy realizando un binding
    if (this.filtroConcepto == "") {
      return this.lista;
    }
    return this.lista.filter(p => p.concepto.startsWith(this.filtroConcepto));
  }


}
