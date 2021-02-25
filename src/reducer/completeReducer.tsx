import { Reducer } from 'redux';
import { deleteTodoAction, markCompleteAction, markIncompleteAction } from 'Type/actionType'
import { Complete } from 'Type/storeType'

const initialState: Complete = [];


const incompleteReducer: Reducer<Complete, deleteTodoAction | markCompleteAction | markIncompleteAction> = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_COMPLETE":
            return [...state, action.todo];
        case "MARK_INCOMPLETE":
        case "DELETE_TODO":
            return [...state.filter((todo: any) => todo !== action.todo)];
        default:
            return [...state]
    }
}

export default incompleteReducer;