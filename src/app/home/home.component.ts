import {Component, OnInit} from '@angular/core';
import {RopaService} from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RopaService]
})
export class HomeComponent implements OnInit {

  public titulo: string;
  public listadoRopa: Array<string>;
  public prendaAGuardar: string;

  public fecha;
  public nombre = 'JUAN LOPEZ MARTINEZ';

  constructor(
    private ropaService: RopaService
  ) {
    this.titulo = 'pagina principal';
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit() {
    this.listadoRopa = this.ropaService.getRopa();
  }

  guardarPrenda() {
    this.ropaService.addRopa(this.prendaAGuardar);
    this.prendaAGuardar = null;
  }

  eliminarPrenda(index: number) {
    this.ropaService.eliminarRopa(index);
  }
}
