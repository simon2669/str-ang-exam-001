import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroList:Hero[]=[
    {id:1,name:'Józsi1',superPower:'fire',address:'Budapest'},
    {id:2,name:'Józsi2',superPower:'ice',address:'Kecskemét'},
    {id:3,name:'Józsi3',superPower:'sör',address:'Arany Ászok'},
    {id:4,name:'Józsi4',superPower:'bor',address:'Balaton'},
    {id:5,name:'Józsi5',superPower:'pálinka',address:'Magyarország'}
  ];
  constructor() { }
  getAll():Hero[]{
    return this.heroList;
  }
}
