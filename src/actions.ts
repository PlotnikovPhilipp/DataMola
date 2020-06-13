import { createAction, ActionCreator, props } from '@ngrx/store';
import { TypedAction, InitialState } from '@ngrx/store/src/models';
import defaultValues from './filmInfo/config.json';
import filmInfo from './filmInfo/films.json';

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

export const initStore: ActionCreator<'[Initiate] AddingData', (props: State) => State & TypedAction<'[Initiate] AddingData'>> = createAction('[Initiate] AddingData', props<State>());

export const filterByName: ActionCreator<'[Filters] Name', () => TypedAction<'[Filters] Name'>> = createAction('[Filters] Name');

export const filterByGenres: ActionCreator<'[Filters] Genre', () => TypedAction<'[Filters] Genre'>> = createAction('[Filters] Genre');

export const filterByYears: ActionCreator<'[Filters] Year', () => TypedAction<'[Filters] Year'>> = createAction('[Filters] Year');