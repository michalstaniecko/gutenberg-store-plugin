import { ADD_TODO } from "./types";

const DEFAULT_STATE = {
    items: []
}
const reducer = ( state = DEFAULT_STATE, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, items: [ ...state.items, action.payload ] };
        default:
            return state;
    }
}

export default reducer;
