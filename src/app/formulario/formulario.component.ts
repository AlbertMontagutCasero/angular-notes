import {Component} from '@angular/core';
import {FormularioCoche} from '../model/formulario-coche';

@Component({
  selector: ' app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  public formCoche: FormularioCoche;
  public coches: Array<FormularioCoche>;


  constructor() {
    this.formCoche = new FormularioCoche('', '', '');
    this.coches = [
        new FormularioCoche('seat panda', '120', 'blanco'),
        new FormularioCoche('renault clio', '110', 'azul')];
  }

  onSubmit() {
    console.log(this.formCoche);
    this.coches.push(this.formCoche);
    this.formCoche = new FormularioCoche('', '', '');
  }
}
