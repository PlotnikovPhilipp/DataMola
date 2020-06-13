import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import genreData from '../filmInfo/genres.json';

@Directive({
  selector: '[appColorGenreItems]'
})
export class ColorGenreItemsDirective implements OnInit {

  @Input('appColorGenreItems') genre: string;
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    for(let i: number = 0; i < genreData.length; i++) {
      if(genreData[i].genre === this.genre) {
        this.element.nativeElement.style.backgroundColor = genreData[i].color;
        break;
      }
    }
  }

}
