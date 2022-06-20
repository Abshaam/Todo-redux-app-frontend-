
// Assign a variable to the ADD_TODO type
export const ADD_TODO = "ADD_TODO"

// action creator
export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: { todo }
 });


 
// Assign a variable to the DELETE_TODO type
export const DELETE_TODO = "DELETE_TODO"

// action creator
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: { id }
 });


 
// Assign a variable to the AMEND_STATUS type
export const AMEND_STATUS = "AMEND_STATUS"

// action creator
export const amendStatus = id => ({
    type: AMEND_STATUS,
    payload: { id }
 });


 
// Assign a variable to the FETCH_TODOS type  action type
export const FETCH_TODOS = "FETCH_TODOS"

// action creator
export const fetchTodos = (todos) => ({
    type: FETCH_TODOS,
    payload: { todos: todos }
 });



// Assign a variable to the TODOS_LOADING type
export const TODOS_LOADING = "TODOS_LOADING"

// action creator
export const todosLoading = () => ({
    type: TODOS_LOADING,
 });



// Assign a variable to the TODOS_LOADING type
export const TODOS_SUCCESS = "TODOS_SUCCESS"

// action creator
export const todosSuccess = (todos) => ({
    type: TODOS_SUCCESS,
    payload: { todos }
 });



 // Assign a variable to the TODOS_LOADING type
export const TODOS_FAILURE = "TODOS_FAILURE"

// action creator
export const todosFailure = (errorMessage) => ({
    type: TODOS_FAILURE,
    payload: { errorMessage }
 })