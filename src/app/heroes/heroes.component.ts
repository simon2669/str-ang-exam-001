import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  herolista:Hero[]=this.heroS.getAll();
  searchText='';
  constructor(
    private heroS:HeroService,
  ) { }

  ngOnInit(): void {
  }
  searchingFor(value:string):void{
    this.searchText=value;
  }

}
