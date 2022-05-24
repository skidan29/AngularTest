import { Action } from '@ngrx/store';

export enum countActionsType {
    increase='[COUNT] increase',
    decrease='[COUNT] decrease',
    clear='[COUNT] clear',
    updatedAt='[COUNT] updatedAt',
    square='[COUNT] square'
}

export class CountIncreaseAction implements Action {
    readonly type = countActionsType.increase
}

export class CountDecreaseAction implements Action {
    readonly type = countActionsType.decrease
}

export class CountSquareAction implements Action {
    readonly type = countActionsType.square
}

export class CountClearAction implements Action {
    readonly type = countActionsType.clear
}
export class CountUpdatedAtAction implements Action {
    readonly type = countActionsType.updatedAt
    constructor(private payload: {
        updatedAt: number;
    }) {}
}

export type CountActions = CountClearAction | CountDecreaseAction | CountIncreaseAction | CountUpdatedAtAction | CountSquareAction;