import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { TODO } from "../todo.model";
import { inject } from "@angular/core";
import { TODO_LIST, TodoServiceService } from "../service/todo-service.service";

export type TODO_FILTER = 'all' | 'pending' | 'completed'

type TodoState = {
    todos : TODO[],
    isLoading: boolean,
    filter : TODO_FILTER
}

const initialState : TodoState = {
    todos : [],
    isLoading : false,
    filter : 'all'
}

export const TODO_STORE = signalStore(
    {providedIn : 'root'},
    withState(initialState),
    withMethods((store, todoService = inject(TodoServiceService))=>({
        async getAllTodos(){
            patchState(store,{isLoading : true});
            let todos = await todoService.getAllTodos();
            patchState(store,{isLoading:false, todos})
        }
    })),
    withHooks({
        onInit(store) {
            console.log("STORE INIT ", store)

            // patchState(store,{todos:TODO_LIST})

            store.getAllTodos()
        },
    })
)