
import {
    Actions,
    Effect,
    ofType,
} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    filter,
    map,
} from 'rxjs';
import {
    countActionsType,
    CountUpdatedAtAction,
} from './reducers/count/count.actions';


@Injectable()
export  class AppEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    updateAt$(){
        return this.actions$.pipe(
            ofType(countActionsType.increase, countActionsType.decrease, countActionsType.clear),
            map(()=> {
                return new CountUpdatedAtAction({updatedAt: Date.now()})
            })
            )
    }
}