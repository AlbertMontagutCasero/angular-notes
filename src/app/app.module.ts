import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import { TipoDeDatosComponent } from './tipo-de-datos/tipo-de-datos.component';

@NgModule({ // Todos los componentes han de estar registrados en este modulo
  declarations: [ // permite declarar directivas pipes y componentes para que se puedan usar globalmente
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    TipoDeDatosComponent
  ],
  imports: [ // Declara diferentes modulos para poder usarlos globalmente
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Declara servicios y configuraciones para que se puedan usar globalmente
  bootstrap: [AppComponent] // Componente principal con el que este modulo se pueda lanzar
})
export class AppModule { }
