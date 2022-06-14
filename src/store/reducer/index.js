import { ADD_TODO, AMEND_STATUS, FETCH_TODOS, DELETE_TODO, TODOS_LOADING,
     TODOS_SUCCESS, TODOS_FAILURE } from "../action"


    //  this is the reducers for add, fetch, delete and update operations (CRUD)
export const todos = (state=[], action) => {
    switch (action.type) {

        case ADD_TODO: {
            return [...state, action.payload.todo].reverse();
        }

        case DELETE_TODO: {
            return state.filter(text => text.id !== action.payload.id);
        }

        case AMEND_STATUS: {
            return state.map(text => text.id === action.payload.id? {...text, isCompleted: !text.isCompleted} : {...text })
        }

        case FETCH_TODOS: {
            console.log('action dispatched from tunk', action);

            return action.payload.todos
        }

        default:
            return state;

    } 
   
}

// this is the reducer for the loading operations
export const loading = (isLoading = false, action) => {
    switch (action.type) {
        case TODOS_LOADING : {
            return isLoading = true
        }

        case TODOS_SUCCESS: {
            return isLoading = true
        }

        case TODOS_FAILURE: {
            return isLoading = true
        }

        default:
            return isLoading;
    }
}
