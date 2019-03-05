// Fichero principal de configuracion para el appRouting
import { Routes, RouterModule } from '@angular/router'; // modulo necesario para appRouting
import { ModuleWithProviders} from '@angular/core'; // modulo necesario para appRouting
import { NgModule } from '@angular/core';

// Components
import { EmpleadosComponent} from './empleados/empleados.component';
import { FrutaComponent} from './fruta/fruta.component';
import {DirectivasComponent} from './directivas/directivas.component';

const routes: Routes = [
  { path : '', component : DirectivasComponent }, // home
  { path : 'empleados', component : EmpleadosComponent},
  { path : 'fruta', component : FrutaComponent},
  { path : 'directivas', component : DirectivasComponent },
  { path : '**', component : DirectivasComponent }, // 404 : not found IMPORTANTE: REVISA POR ORDEN ASI QUE ESTO TIENE QUE IR AL FINAL
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); // Se usaran en app.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

