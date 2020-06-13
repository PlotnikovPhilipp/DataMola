import { createReducer, on, ActionReducer } from '@ngrx/store';
import { initStore, filterByName, filterByGenres, filterByYears } from './actions';

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

const _mainReducer: ActionReducer<State> = createReducer(
    initialState,
    on(initStore, (state, props): State => {
        return({
            'DEFAULT_GENRE': props.DEFAULT_GENRE,
            'DEFAULT_YEAR': props.DEFAULT_YEAR,
            'AMOUNT_OF_FILM_ON_ONE_PAGE': props.AMOUNT_OF_FILM_ON_ONE_PAGE,
            'films': props.films
        });
    }),

    /* on(filterByName, (state): State => {
        return({...state});
    }),

    on(filterByName, (state): State => {
        return({...state});
    }),

    on(filterByName, (state): State => {
        return({...state});
    }), */
);

export function mainReducer(state: State, action) {
    return _mainReducer(state, action);
}