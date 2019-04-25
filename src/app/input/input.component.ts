import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public titulo: string;
  public fromChildObject: {nombre};

  constructor() {
    this.titulo = 'Input Component';
  }

  ngOnInit() {
  }

  recibirDatos(event) {
    console.log(event.nombre);
    this.fromChildObject = event;
  }
}
