import { ADD_TODO, AMEND_STATUS, FETCH_TODOS, DELETE_TODO, TODOS_LOADING,
     TODOS_SUCCESS, TODOS_FAILURE } from "../action"


    //  this is the reducers for add, fetch, delete and update operations (CRUD)
export const todos = (state = { data: [], loading: false, errorMessage: "" }, action) => {
    switch (action.type) {

        case ADD_TODO: {
            return{ ...state,
                   data: [...state.data, action.payload.todo].reverse(),
                   loading: false
                 }
        }

        case DELETE_TODO: {
            return { ...state, data: state.data.filter(text => text.id !== action.payload.id)
            }
        }

        case AMEND_STATUS: {
            return { ...state, data: state.data.map(text => text.id === action.payload.id? {...text, isCompleted: !text.isCompleted} : {...text })
           }
        }

        case FETCH_TODOS: {
            console.log('action dispatched from tunk', action);

            return { 
                ...state,
                   loading: false,
                   data: action.payload.todos
                }
        }

        case TODOS_LOADING: {
            return { ...state,
                 loading : true
            }
        }

        case TODOS_SUCCESS: {
            return { ...state,
                 loading : false
            }
        }

        case TODOS_FAILURE: {
            return { ...state,
                 loading : false,
                 errorMessage: action.payload
            }
        }

        default:
            return state;

    } 
   
}

// this is the reducer for the loading operations
// export const loading = (isLoading = false, state, action) => {
//     switch (action.type) {
//         case TODOS_LOADING : {
//             return {
//                 isloading: true
                            
//             } 
//         }

//         case TODOS_SUCCESS: {
//             return {
//                  isLoading : false
//             }
//         }

//         case TODOS_FAILURE: {
//             return isLoading = false
//         }

//         default:
//             return isLoading;
//     }
// }
