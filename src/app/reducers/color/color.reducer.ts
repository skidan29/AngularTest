import { State } from '@ngrx/store';
import { colorType } from './color.action';

export interface ColorState {
    color: string;
}

export const colorNode = 'color'

export const initialState: ColorState = {
    color: 'black'
}
export const colorReducer = (state = initialState, action: any) => {
    switch(action.type){
        case colorType.red: return {...state, color:'red'};
        case colorType.black: return {...state, color:'black'}
        default: return state;
    }
}