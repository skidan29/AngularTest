import { Action } from '@ngrx/store';

export enum colorType {
    red = "[COLOR] red",
    black = "[COLOR] black"
}

export class ColorBlackAction implements Action {
    readonly type=colorType.black;
}

export class ColorRedAction implements Action {
    readonly type=colorType.red;
}

export type ColorAction = ColorRedAction | ColorBlackAction;