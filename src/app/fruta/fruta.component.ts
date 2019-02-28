import {Component} from '@angular/core';

@Component({
  selector : 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: [ './fruta.component.css' ]
})
export class FrutaComponent {
  public nombreComponente = 'Componente de fruta';
  public listadoFruta = 'Naranja, Manzana, Pera y Sandia';

  constructor() {

  }
}
