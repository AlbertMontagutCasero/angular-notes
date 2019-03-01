import {Component, OnInit} from '@angular/core';
import {Empleado} from '../model/empleado';

@Component({
  selector : 'app-directivas',
  templateUrl : './directivas.component.html',
  styleUrls: [ './directivas.component.css' ]
})
export class DirectivasComponent implements OnInit {

  public empleadoEstrella: Empleado;
  public titulo: string;
  public trabajadores: Array<Empleado>;
  public trabajadorExterno: boolean;
  public color: string;
  public colorSeleccionado: string;

  constructor() {
    this.titulo = 'DIRECTIVAS COMPONENT';
    this.empleadoEstrella = new Empleado('Albert Montagut', 21, 'Programador', true);
    this.trabajadores = [
      new Empleado('Albert Montagut', 21, 'Programador', true),
      new Empleado('Silvia Fortuny', 24, 'Disenyador', false),
      new Empleado('Tetesico', 3, 'bebe', false),
      new Empleado('EL DADY', 65, 'Asalta Cunas', true),
    ];

    this.trabajadorExterno = true;
    this.color = 'blue';
    this.colorSeleccionado = '#ccc';
  }

  ngOnInit() {
    console.log(this.trabajadores);
  }

  isExterno(isIt) {
    this.trabajadorExterno = isIt;
  }

  logColorSelected() {
    console.log(this.colorSeleccionado);
  }
}
