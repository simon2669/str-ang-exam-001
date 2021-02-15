import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(lista:Hero[],ertek:string): Hero[] {
    // if (!Array.isArray(lista)||!ertek) {
    //   return lista;
    // }

    return lista.filter((hos)=>{

      return hos.name.toLocaleLowerCase().includes(((ertek.toLocaleLowerCase())));
    })

  }

}
