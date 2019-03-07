import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'; // para poder importar hay que instalar el modulo en angular
                                            // con npm install --save rxjs-compat
import {map} from 'rxjs/operators';

@Injectable()
export class PeticionesService {
  public url: string;

  constructor(
    private http: HttpClient

  ) {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
  }

  getPrueba() {
    return 'hola mundo desde el servicio';
  }

  getArticulos() {
    return this.http.get(this.url);
  }
}
