import { markCompleteAction, deleteTodoAction, markIncompleteAction } from './actionType'

export type MarkCompleteActionCreator = (todo: string) => markCompleteAction;
export type MarkInompleteActionCreator = (todo: string) => markIncompleteAction;
export type MarkDeleteActionCreator = (todo: string) => deleteTodoAction;

