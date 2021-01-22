import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ErrorComponent } from './error/error.component';
import { FormularioProductosEdicionComponent } from './formulario-productos-edicion/formulario-productos-edicion.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
  { path: 'lista', component: ListaProductosComponent },
  { path: 'formulario', component: FormularioProductosComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'formularioEdicion/:id', component: FormularioProductosEdicionComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
