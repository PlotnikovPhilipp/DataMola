import { Component } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { getStoreData } from '../../store/selector';
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

      this.listOfFilms = storeData.films;
      this.displayedFilms = [];
      for(let i: number = this.from; i < this.to && i < this.listOfFilms.length; i++) {
        this.displayedFilms.push(this.listOfFilms[i]);
      } 
    });
  }



}
