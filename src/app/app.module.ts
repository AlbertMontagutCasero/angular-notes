import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

// Components
import {AppComponent} from './app.component';
import {FrutaComponent} from './fruta/fruta.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {TipoDeDatosComponent} from './tipo-de-datos/tipo-de-datos.component';
import {DirectivasComponent} from './directivas/directivas.component';
import {HomeComponent} from './home/home.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ConversorPipe} from './pipes/conversor.pipe';
import {FormularioComponent} from './formulario/formulario.component';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { InputComponent } from './input/input.component';
import { InputChildComponent } from './input/input-child/input-child.component';


@NgModule({ // Todos los componentes han de estar registrados en este modulo
  declarations: [ // permite declarar directivas pipes y componentes para que se puedan usar globalmente
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    TipoDeDatosComponent,
    DirectivasComponent,
    HomeComponent,
    ContactoComponent,
    ConversorPipe,
    FormularioComponent,
    PlantillasComponent,
    InputComponent,
    InputChildComponent
  ],
  imports: [ // Declara diferentes modulos para poder usarlos globalmente
    BrowserModule,
    FormsModule, // Modulo que permite hace Two data binding
    AppRoutingModule, // Modulo de rutas
    HttpClientModule
  ],
  providers: [], // Declara servicios y configuraciones para que se puedan usar globalmente
  bootstrap: [AppComponent] // Componente principal con el que este modulo se pueda lanzar
})
export class AppModule {
}
