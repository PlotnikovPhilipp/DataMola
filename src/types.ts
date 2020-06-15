export interface genreSettings {
    genre: string;
    color: string;
}

export interface filmItem {
    'filmName': string;
    'info': {
        'genre': string;
        'season': string;
        'network': string;
        'date': string;
    }
}
  
export interface State {
    'DEFAULT_GENRE': string;
    'DEFAULT_YEAR': string;
    'AMOUNT_OF_FILM_ON_ONE_PAGE': number;
    'currentPageIndex': number;
    'genreList': Array<genreSettings>;
    'yearList': Array<string>;
    'films': Array<filmItem>
}

export interface AppState {
    state: State;
}