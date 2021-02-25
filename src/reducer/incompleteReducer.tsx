import { Reducer } from 'redux';
import { deleteTodoAction, markCompleteAction, markIncompleteAction } from 'Type/actionType'
import { Incomplete } from 'Type/storeType'

const initialState: Incomplete = [];

const completeReducer: Reducer<Incomplete, deleteTodoAction | markCompleteAction | markIncompleteAction> = (state = initialState, action) => {
    switch (action.type) {
        case "MARK_INCOMPLETE":
            return [...state, action.todo];
        case "DELETE_TODO":
        case "MARK_COMPLETE":
            return [...state.filter((todo: any) => todo !== action.todo)];
        default:
            return [...state];
    }
}

export default completeReducer;