import { createAction, ActionCreator, props } from '@ngrx/store';
import { TypedAction, InitialState } from '@ngrx/store/src/models';
import defaultValues from '../assets/filmInfo/config.json';
import filmInfo from '../assets/filmInfo/films.json';
import { State, filmItem } from '../types';

export const initStore: ActionCreator<'[Initiate] AddingData', (props: State) => State & TypedAction<'[Initiate] AddingData'>> = createAction('[Initiate] AddingData', props<State>());

export const reinitStore: ActionCreator<'[Initiate] Reinit', (props: State) => State & TypedAction<'[Initiate] Reinit'>> = createAction('[Initiate] Reinit', props<State>());


// Filter actions
export const filterByName: ActionCreator<'[Filters] Name', (props: {name: string}) => {name: string} & TypedAction<'[Filters] Name'>> = createAction('[Filters] Name', props<{name: string}>());

export const nameFilterByEffect: ActionCreator<'[Filters] nameFilterByEffect', (props: State) => State & TypedAction<'[Filters] nameFilterByEffect'>> = createAction('[Filters] nameFilterByEffect', props<State>());


export const filterByGenres: ActionCreator<'[Filters] Genre', (props: {genre: string}) => {genre: string} & TypedAction<'[Filters] Genre'>> = createAction('[Filters] Genre', props<{genre: string}>());

export const genreFilterByEffect: ActionCreator<'[Filters] genreFilterByEffect', (props: State) => State & TypedAction<'[Filters] genreFilterByEffect'>> = createAction('[Filters] genreFilterByEffect', props<State>());


export const filterByYears: ActionCreator<'[Filters] Year', (props: {year: string}) => {year: string} & TypedAction<'[Filters] Year'>> = createAction('[Filters] Year', props<{year: string}>());

export const yearFilterByEffect: ActionCreator<'[Filters] yearFilterByEffect', (props: State) => State & TypedAction<'[Filters] yearFilterByEffect'>> = createAction('[Filters] yearFilterByEffect', props<State>());


// Sort actions
export const sortByName: ActionCreator<'[Sorts] Name', () => TypedAction<'[Sorts] Name'>> = createAction('[Sorts] Name');

export const nameSortByEffect: ActionCreator<'[Sorts] nameSortByEffect', (props: State) => State & TypedAction<'[Sorts] nameSortByEffect'>>  = createAction('[Sorts] nameSortByEffect', props<State>());


export const sortBySeason: ActionCreator<'[Sorts] Season', () => TypedAction<'[Sorts] Season'>> = createAction('[Sorts] Season');

export const seasonSortByEffect: ActionCreator<'[Sorts] seasonSortByEffect', (props: State) => State & TypedAction<'[Sorts] seasonSortByEffect'>> = createAction('[Sorts] seasonSortByEffect', props<State>());


export const sortByNetwork: ActionCreator<'[Sorts] Network', () => TypedAction<'[Sorts] Network'>> = createAction('[Sorts] Network');

export const networkSortByEffect: ActionCreator<'[Sorts] networkSortByEffect', (props: State) => State & TypedAction<'[Sorts] networkSortByEffect'>> = createAction('[Sorts] networkSortByEffect', props<State>());


export const sortByPremiere: ActionCreator<'[Sorts] Premiere', () => TypedAction<'[Sorts] Premiere'>> = createAction('[Sorts] Premiere');

export const premiereSortByEffect: ActionCreator<'[Sorts] premiereSortByEffect', (props: State) => State & TypedAction<'[Sorts] premiereSortByEffect'>> = createAction('[Sorts] premiereSortByEffect', props<State>());


// Page actions
export const changePage: ActionCreator<'[Pages] ChangePage', (props: State) => State & TypedAction<'[Pages] ChangePage'>> = createAction('[Pages] ChangePage', props<State>());

export const changeAmountFilmOnOnePage: ActionCreator<'[Pages] ChangeAmountFilm', (props: State) => State & TypedAction<'[Pages] ChangeAmountFilm'>> = createAction('[Pages] ChangeAmountFilm', props<State>());