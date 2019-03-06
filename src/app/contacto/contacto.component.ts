import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; // Imports for Redirect and routing paramenters

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public titulo: string;
  public parameter;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.titulo = 'Pagina de Contacto de la web';

  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => { // this.route.params -> array de los parametros de la url
      this.parameter = params.page;
    });
  }

  redirigir() {
    this.router.navigate(['/contacto', 'albert.montagut.casero.me']);
  }

  redirigirDos() {
    this.router.navigate(['/home', 'albert.montagut.casero.me']);
  }

}
