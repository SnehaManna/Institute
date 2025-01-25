

import { computed, inject, InjectionToken } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
interface ICounter {
    count: number
};

export const initialState: ICounter = {
    count: 0
};

const COUNTER_STATE = new InjectionToken<ICounter>('CounterState', {
    factory: () => initialState
})

export const CounterStore = signalStore(
    // {providedIn : 'root'}, at the root level.
    withState(initialState),
    // withState(() => inject(COUNTER_STATE)),
    withMethods(({ count, ...store }) => ({
            inr() {
                patchState(store, { count: count() + 1 })
            },
            dec() {
                patchState(store, { count: count() - 1 })
            },
            mul(n:number){
                patchState(store, {count: count() * n})
            }
        })
    ),
    withComputed(({count})=>  ({
        doubleVal : computed(()=> count() * 2)
    }))
)