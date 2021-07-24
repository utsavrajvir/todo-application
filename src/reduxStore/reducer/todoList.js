import * as types from '../types/todoList';

const initialState = {
    todoList: [],
    todoModal: false,
    editTodo: {},
    selectedTab: 'all'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TODO_LIST:
            return {
                ...state,
                todoList: action.payload.todoList,
            };
        case types.SET_TODO_MODAL:
            return {
                ...state,
                todoModal: action.payload.todoModal,
            };
        case types.SET_EDIT_TODO:
            return {
                ...state,
                editTodo: action.payload.editTodo,
            };
        case types.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab,
            };

        default:
            return state;
    }
};
