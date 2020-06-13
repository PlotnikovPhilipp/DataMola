import { createSelector } from '@ngrx/store';

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

const getAppStore: (state: AppState) => State = (state: AppState): State => state.state;
const getData: (state: State) => State = (state: State): State => state;
export const getStoreData = createSelector(getAppStore, getData);