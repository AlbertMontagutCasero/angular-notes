import { Component } from '@angular/core'; // Importamos el modulo Component del paquete @angular/core

@Component({ // Añade metadatos para que los utilice la clase, vuelve esta clase un componente
  selector: 'app-root', // Etiqueta utilizar para cargar el componente
  templateUrl: './app.component.html', // Asignarle una platilla (vista) a la clase
  styleUrls: ['./app.component.css'], // Asignarle una hoja de estilos a la clase
})
export class AppComponent {
  title = 'angular-notes';
}
