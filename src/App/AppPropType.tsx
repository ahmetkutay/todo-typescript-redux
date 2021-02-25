import { Complete, Incomplete } from 'Type/storeType';
import { MarkCompleteActionCreator, MarkDeleteActionCreator, MarkInompleteActionCreator } from 'Type/actionCreatorType';


interface AppPropType {
    complete: Complete;
    incomplete: Incomplete;
    deleteTodo: MarkDeleteActionCreator,
    markComplete: MarkCompleteActionCreator,
    markIncomplete: MarkInompleteActionCreator
}

export default AppPropType;