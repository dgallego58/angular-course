import { Producto } from './../dominio/producto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  lista: Producto[] = [];
  productoToBeDeleted!: Producto;

  constructor() {
    this.lista.push(new Producto(1, "telefono", 300), new Producto(2, "tablet", 200), new Producto(3, "pc", 400))
  }


  public findAll(): Producto[] {
    return this.lista;
  }

  public deleteById(producto: Producto): void {
    let indice = this.lista.indexOf(producto);
    this.lista.splice(indice, 1);
  }

}
