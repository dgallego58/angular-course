import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../dominio/producto';
import { ProductosRestService } from '../servicio/productos-rest.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto!: Producto;

  constructor(public servicioProductoRest: ProductosRestService, public route: ActivatedRoute) {

    //acceso a servicio REST que acceda a la url que acabamos de construir
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((parameters) => {

      this.servicioProductoRest.findById(parameters.get('id')).subscribe((data) => {
        this.producto = data;
      })
    });

  }

}
