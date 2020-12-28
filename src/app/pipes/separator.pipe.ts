import { Pipe, PipeTransform } from '@angular/core';
import { UtilesService } from '../utiles.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private UtilesService: UtilesService) { }
  transform(price: number, sep : string): unknown {
    return this.UtilesService.numberSeparator(price,sep);
  }

  
}
