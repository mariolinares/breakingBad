import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tilde'
})
export class TildePipe implements PipeTransform {

  /**
   * Eliminar tildes de la cadena de texto por tipografía
   * @param value 
   */
  transform(value: string): string {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g,"");;
  }

}
