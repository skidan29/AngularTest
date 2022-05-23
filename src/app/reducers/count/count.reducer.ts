import { Action } from '@ngrx/store';
import {
    countActionsType,
} from './count.actions';

export const countNode = 'count'
export interface CountSate {
    count: number;
    updateAt: number;
}

const initialState: CountSate = {
    count: 0,
    updateAt: Date.now()
}

export const countReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case countActionsType.increase: return {...state, count: state.count+1,};
        case countActionsType.decrease: return {...state, count: state.count-1,};
        case countActionsType.clear: return {...state, count: 0,};
        default: return state;
    }
    return state;
}