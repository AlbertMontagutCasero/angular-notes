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

  constructor(
    private ropaService: RopaService
  ) {
    this.titulo = 'pagina principal';
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
