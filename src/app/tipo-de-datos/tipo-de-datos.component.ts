import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-de-datos',
  templateUrl: './tipo-de-datos.component.html',
  styleUrls: ['./tipo-de-datos.component.css']
})
export class TipoDeDatosComponent implements OnInit {

  public nombre: string;
  public edad: number;
  public mayorDeEdad: boolean;
  public trabajos: Array<string | number>;
  public meLaSuda: any;

  constructor() {
    this.nombre = 'albert';
    this.edad = 21;
    this.mayorDeEdad = true;
    this.trabajos = ['Carpinter', 44, 'Oficinista'];
    this.meLaSuda = 22;
    this.meLaSuda = 'seLaSuda';
  }


  ngOnInit() { // Se ejecuta justo despues de crear el componente
    this.setEdad(25);
    alert(this.edad);
  }

  setEdad(edad) {
    this.edad = edad;
  }
}
