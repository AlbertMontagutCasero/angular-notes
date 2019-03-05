import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo: string;


  constructor() {
    this.titulo = 'Pagina de Contacto de la web';
  }

  ngOnInit() {
  }

}
