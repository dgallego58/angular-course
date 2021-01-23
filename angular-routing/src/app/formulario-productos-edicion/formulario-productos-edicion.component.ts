import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { Producto } from '../dominio/producto';
import { ProductosRestService } from '../servicio/productos-rest.service';

@Component({
  selector: 'app-formulario-productos-edicion',
  templateUrl: './formulario-productos-edicion.component.html',
  styleUrls: ['./formulario-productos-edicion.component.css']
})
export class FormularioProductosEdicionComponent implements OnInit {

  productoEditar: Producto = new Producto();

  constructor(public servicioProductoRest: ProductosRestService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(parameters => {

      let id = parameters.get('id') || '1';
      this.servicioProductoRest.buscarUnoPorId(id).subscribe(data => {
        this.productoEditar = data;
      })
    });

  }


  updateProduct(producto: Producto): void {
    console.log('vamos a salvar el producto %0', producto);
    let prodId: string = producto.id!.toString();
    this.servicioProductoRest.actualizar(this.productoEditar, prodId).subscribe(data => {
      console.log(`login stuff ${JSON.stringify(data, null, 4)}`);
      this.router.navigate(['/lista']);
    });
  }

}
