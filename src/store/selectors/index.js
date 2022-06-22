import { createSelector } from "reselect"

export const getTodosData = state => state.todos.data



export const getTodosLoading = state => state.todos.loading


export const completeTodos = createSelector(
    getTodosData,
    (todos) => todos.filter(todo => todo.isCompleted)
)

export const IncompletedTodos = createSelector(
    getTodosData,
    (todos) => todos.filter(todo => !todo.isCompleted)
)