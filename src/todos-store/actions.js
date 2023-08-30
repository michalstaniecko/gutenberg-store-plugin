import { ADD_TODO, POPULATE_TODOS } from "./types";

export const addTodo = ( todo ) => {
    return {
        type: ADD_TODO, payload: todo
    }
}

export const populateTodos = ( todos ) => {
    return {
        type: POPULATE_TODOS,
        payload: todos
    }
}
