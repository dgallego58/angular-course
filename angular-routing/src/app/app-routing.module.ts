import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DetalleComponent } from './detalle/detalle.component';
import { ErrorComponent } from './error/error.component';
import { FormularioProductosEdicionComponent } from './formulario-productos-edicion/formulario-productos-edicion.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaProductosComponent, canActivate: [AuthenticationGuard] },
  { path: 'formulario', component: FormularioProductosComponent, canActivate: [AuthenticationGuard] },
  { path: 'detalle/:id', component: DetalleComponent, canActivate: [AuthenticationGuard] },
  { path: 'formularioEdicion/:id', component: FormularioProductosEdicionComponent, canActivate: [AuthenticationGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
