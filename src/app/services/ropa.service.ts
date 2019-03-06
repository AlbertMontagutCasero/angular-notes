import {Injectable} from '@angular/core'; // Modulo que permite inyectar el servicio


@Injectable()
export class RopaService {

  public nombrePrenda = 'pantalones baqueros';
  public coleccionRopa = ['Pantalones Blancos', 'Camiseta roja'];

  addRopa(nombrePrenda: string): Array<string> {
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }

  getRopa(): Array<string> {
    console.log('tonto');
    return this.coleccionRopa;
  }

  eliminarRopa(index: number) {
    this.coleccionRopa.splice(index, 1);
  }
}
