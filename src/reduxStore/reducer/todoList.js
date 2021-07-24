import * as types from '../types/todoList';

const initialState = {
    todoList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODO_LIST:
            return {
                ...state,
                todoList: action.payload.todoList,
            };
        default:
            return state;
    }
};
