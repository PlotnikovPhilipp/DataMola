import { Component } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { getStoreData } from '../../selector';
import { filmItem, AppState, State } from '../../types';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {
  listOfFilms: Array<filmItem>;
  displayedFilms: Array<filmItem>;
  from: number;
  to: number;
  amount: number;
  defaultFilmValue: filmItem;
  height: string;

  constructor(private store: Store<AppState>) {
    this.defaultFilmValue = {
      "filmName": "",
      "info":
          {
              "genre": "",
              "season": "",
              "network": "",
              "date": ""
          }
    };

    this.store.pipe(select(getStoreData)).subscribe((storeData: State) => {
      this.from = storeData.AMOUNT_OF_FILM_ON_ONE_PAGE * storeData.currentPageIndex;
      this.to = storeData.AMOUNT_OF_FILM_ON_ONE_PAGE  + storeData.AMOUNT_OF_FILM_ON_ONE_PAGE * storeData.currentPageIndex;

      switch(storeData.AMOUNT_OF_FILM_ON_ONE_PAGE) {
        case 5:
          this.height = '60vh';
          break;
        case 10:
          this.height = '80vh';
          break;
        default:
          this.height = '200vh';
      }

      this.listOfFilms = storeData.films;
      this.displayedFilms = [];
      for(let i: number = this.from; i < this.to; i++) {
        if(i >= this.listOfFilms.length) {
          this.displayedFilms.push(this.defaultFilmValue);
          continue;
        }
        this.displayedFilms.push(this.listOfFilms[i]);
      } 
    });
  }



}
