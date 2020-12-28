import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputHeader'
})
export class InputHeaderPipe implements PipeTransform {

  transform(tab: any, property: string): any {

    var recherche = tab.filter(function(searchFilter) {
      return searchFilter.title.indexOf(property) >= 0;
    });
    
    return recherche;
  }

}
