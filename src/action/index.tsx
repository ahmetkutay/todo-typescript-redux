import { MarkCompleteActionCreator, MarkDeleteActionCreator, MarkInompleteActionCreator } from '../Type/actionCreatorType'

export const markComplete: MarkCompleteActionCreator = (todo) => {
    return {
        type: "MARK_COMPLETE",
        todo,
    }
}

export const markInComplete: MarkInompleteActionCreator = (todo) => {
    return {
        type:"MARK_INCOMPLETE",
        todo,
    }
}

export const deleteTodo: MarkDeleteActionCreator = (todo) => {
    return {
        type: "DELETE_TODO",
        todo,
    }
}