import {
    Action,
    State,
} from '@ngrx/store';
import {
    ColorAction,
    colorType,
} from './color.action';
import { Actions } from '@ngrx/effects';

export interface ColorState {
    color: string;
}

export const colorNode = 'color'

export const initialState: ColorState = {
    color: 'black'
}
export const colorReducer = (state = initialState, action: Action) => {
    switch(action.type){
        case colorType.red: return {...state, color:'red'};
        case colorType.black: return {...state, color:'black'}
        default: return state;
    }
}