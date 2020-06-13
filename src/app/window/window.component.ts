import { Component } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { getStoreData } from '../../selector';
import { Observable } from 'rxjs';

interface filmSettings {
  'genre': string;
  'season': string;
  'network': string;
  'data': string;
}

interface itemSetting {
  [key: string]: filmSettings | string;
}

interface filmItem {
  'filmName': string;
  'info': {
      'genre': string;
      'season': string;
      'network': string;
      'data': string;
  }
}

interface State {
  'DEFAULT_GENRE': string;
  'DEFAULT_YEAR': number;
  'AMOUNT_OF_FILM_ON_ONE_PAGE': number;
  'films': Array<filmItem>
}

const initialState: State = {
  'DEFAULT_GENRE': null,
  'DEFAULT_YEAR': null,
  'AMOUNT_OF_FILM_ON_ONE_PAGE': null,
  'films': null
};

interface AppState {
  state: State;
}

const AMOUNT:number = 5;
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.sass']
})
export class WindowComponent {
  listOfFilm: Array<itemSetting>;
  amount: number;
  displayedFilms: Array<itemSetting>;
  currentFilmIndex: number;
  storeData: Observable<State>;
  listOfFilms: State;

  constructor(private store: Store<AppState>) {
    this.storeData = this.store.pipe(select(getStoreData));
    this.storeData.subscribe((storeData: State) => {
      this.listOfFilms = storeData; 
    });
  }



}
