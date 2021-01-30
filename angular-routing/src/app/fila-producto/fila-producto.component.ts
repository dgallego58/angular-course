import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../dominio/producto';

@Component({
  selector: 'app-fila-producto',
  templateUrl: './fila-producto.component.html',
  styleUrls: ['./fila-producto.component.css']
})
export class FilaProductoComponent implements OnInit {


  //no pertenencen realmente a este componente sino al componente padre
  @Input()
  productoEditado?: Producto;
  @Input()
  producto?: Producto;
  @Output() eventoBorrar = new EventEmitter<Producto>();
  @Output() eventoDetalle = new EventEmitter<Producto>();
  @Output() eventoEdicionRapida = new EventEmitter<Producto>();
  @Output() eventoEdicion2 = new EventEmitter<Producto>();
  @Output() eventoSalvar = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(producto: Producto): void {

    console.log(producto);

    this.eventoBorrar.emit(producto);
  }

  detalleProducto(producto: Producto): void {
    this.eventoDetalle.emit(producto);
  }

  edicionRapida(producto: Producto): void {
    this.eventoEdicionRapida.emit(producto);
  }

  editar2(producto: Producto): void {
    this.eventoEdicion2.emit(producto);
  }

  salvar(producto: Producto): void {
    this.eventoSalvar.emit(producto);
  }
}
