import { createSelector } from '@ngrx/store';
import { AppState, State } from '../types';
import { filmItem } from '../types';

const getAppStore: (state: AppState) => State = (state: AppState): State => state.state;
const getData: (state: State) => [Array<filmItem>, State] = (state: State): [Array<filmItem>, State] => {
    let from: number = state.AMOUNT_OF_FILM_ON_ONE_PAGE * state.currentPageIndex;
    let to: number = state.AMOUNT_OF_FILM_ON_ONE_PAGE  + state.AMOUNT_OF_FILM_ON_ONE_PAGE * state.currentPageIndex;

    let listOfFilms: Array<filmItem> = state.films;
    let displayedFilms: Array<filmItem>  = [];
    for(let i: number = from; i < to && i < listOfFilms.length; i++) {
        displayedFilms.push(listOfFilms[i]);
    }
    
    return [displayedFilms, state];
};
export const getStoreData = createSelector(getAppStore, getData);