import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(tab: any,searchFilter: string,property: string): any {
    if (tab.length === 0 || searchFilter.length === 0){
      return tab;
    }
    //met les données filtrés dans 
    const resultArray = [];
    for (let item of tab) {
      if (item[property].includes(searchFilter)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
