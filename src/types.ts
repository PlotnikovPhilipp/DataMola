export interface genreSettings {
    genre: string;
    color: string;
}

export interface yearSettings {
    from: number;
    to: number;
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
    'yearList': yearSettings;
    'films': Array<filmItem>
}

export interface AppState {
    state: State;
}