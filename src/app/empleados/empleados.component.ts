import {Component} from '@angular/core';

@Component({
  selector : 'app-empleados',
  templateUrl : './empleados.components.html',
  styleUrls: [ './empleados.components.css' ]
})
export class EmpleadosComponent {

  public titulo;

  constructor() {
    this.titulo = 'empleado 1';
  }
}
