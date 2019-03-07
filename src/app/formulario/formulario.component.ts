import {Component, OnInit} from '@angular/core';
import {FormularioCoche} from '../model/formulario-coche';
import { PeticionesService} from '../services/peticiones.service';


@Component({
  selector: ' app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers : [PeticionesService]

})
export class FormularioComponent implements OnInit{
  public formCoche: FormularioCoche;
  public coches: Array<FormularioCoche>;
  public articulos;


  constructor(
    private peticionesService: PeticionesService
  ) {
    this.formCoche = new FormularioCoche('', '', '');
    this.coches = [
        new FormularioCoche('seat panda', '120', 'blanco'),
        new FormularioCoche('renault clio', '110', 'azul')];
  }

  ngOnInit(): void {

    this.peticionesService.getArticulos().subscribe(
      result => {
        this.articulos = result;

        if ( !this.articulos) {
          console.log('error en el servidor');
        }

      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
      }
    );
  }


  onSubmit() {
    console.log(this.formCoche);
    this.coches.push(this.formCoche);
    this.formCoche = new FormularioCoche('', '', '');
  }
}
