import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {TipoDeDatosComponent} from './tipo-de-datos/tipo-de-datos.component';
import {DirectivasComponent} from './directivas/directivas.component';


@NgModule({ // Todos los componentes han de estar registrados en este modulo
  declarations: [ // permite declarar directivas pipes y componentes para que se puedan usar globalmente
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    TipoDeDatosComponent,
    DirectivasComponent
  ],
  imports: [ // Declara diferentes modulos para poder usarlos globalmente
    BrowserModule,
    AppRoutingModule,
    FormsModule // Modulo que permite hace Two data binding
  ],
  providers: [], // Declara servicios y configuraciones para que se puedan usar globalmente
  bootstrap: [AppComponent] // Componente principal con el que este modulo se pueda lanzar
})
export class AppModule { }
