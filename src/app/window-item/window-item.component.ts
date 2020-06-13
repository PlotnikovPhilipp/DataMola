import { Component, Input, OnInit } from '@angular/core';
import {  Store, select } from '@ngrx/store';
import { getStoreData } from '../../selector';
import { Observable } from 'rxjs';

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

@Component({
  selector: 'app-window-item',
  templateUrl: './window-item.component.html',
  styleUrls: ['./window-item.component.sass'],
  inputs: ['name', 'genre', 'season', 'network', 'data']
})
export class WindowItemComponent implements OnInit {
  name: string;
  genre: string;
  season: string;
  network: string;
  data: string;
  height: number;
  listOfFilms: State;
  storeData: Observable<State>;
  listOfGenres: Array<string>;

  constructor(private store: Store<AppState>) {
    this.storeData = this.store.pipe(select(getStoreData));
    this.storeData.subscribe((storeData: State) => {
      this.listOfFilms = storeData;

      
      // Define the height of item, <window.innerHeight * 0.6> is the height of main section of window
      this.height = window.innerHeight * 0.6 / this.listOfFilms.AMOUNT_OF_FILM_ON_ONE_PAGE;  
    });
    
  }

  ngOnInit() {
    this.listOfGenres = this.genre.split('|');
  }

}
