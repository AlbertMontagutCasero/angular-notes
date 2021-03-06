// Fichero principal de configuracion para el appRouting
import {Routes, RouterModule} from '@angular/router'; // modulo necesario para appRouting
import {ModuleWithProviders} from '@angular/core'; // modulo necesario para appRouting
import {NgModule} from '@angular/core';

// Components
import {EmpleadosComponent} from './empleados/empleados.component';
import {FrutaComponent} from './fruta/fruta.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {HomeComponent} from './home/home.component';
import {TipoDeDatosComponent} from './tipo-de-datos/tipo-de-datos.component';
import {ContactoComponent} from './contacto/contacto.component';
import {FormularioComponent} from './formulario/formulario.component';
import {PlantillasComponent} from './plantillas/plantillas.component';
import {InputComponent} from './input/input.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // home
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'directivas', component: DirectivasComponent},
  {path: 'tipo-de-datos', component: TipoDeDatosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'formulario' , component: FormularioComponent},
  {path: 'contacto/:page', component: ContactoComponent}, /* Routing with get parameters*/
  {path: 'plantillas' , component: PlantillasComponent},
  {path: 'input' , component: InputComponent},
  {path: '**', component: HomeComponent}, // 404 : not found IMPORTANTE: REVISA POR ORDEN ASI QUE ESTO TIENE QUE IR AL FINAL
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes); // Se usaran en app.module.ts

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

