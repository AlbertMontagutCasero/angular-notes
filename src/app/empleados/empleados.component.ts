import {Component, OnInit} from '@angular/core';
import {Empleado} from '../model/empleado';

@Component({
  selector : 'app-empleados',
  templateUrl : './empleados.component.html',
  styleUrls: [ './empleados.component.css' ]
})
export class EmpleadosComponent implements OnInit {

  public empleado: Empleado;
  public titulo: string;
  public trabajadores: Array<Empleado>;

  constructor() {
    this.titulo = 'empleados component';
    this.empleado = new Empleado('Albert Montagut', 21, 'Programador', true);
    this.trabajadores = [
      new Empleado('Albert Montagut', 21, 'Programador', true),
      new Empleado('Silvia Fortuny', 24, 'Disenyador', false),
      new Empleado('Tetesico', 3, 'bebe', false),
      new Empleado('EL DADY', 65, 'Asalta Cunas', true),
    ];
  }

  ngOnInit() {
    console.log(this.trabajadores);
  }
}
