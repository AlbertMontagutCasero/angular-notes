import {Pipe, PipeTransform} from '@angular/core'; // modulos para crear tus propias pipes

@Pipe({name: 'conversor'})
export class ConversorPipe implements PipeTransform {
  transform(value: number, por: number) { // funcion que se llamara al utilizar la pipe
    const valueOne = value;
    const valueTwo = por;

    const result = 'la multiplicacion: ' + valueOne + ' x ' + valueTwo + ' = ' + (valueOne * valueTwo);
    return result;
  }
}
