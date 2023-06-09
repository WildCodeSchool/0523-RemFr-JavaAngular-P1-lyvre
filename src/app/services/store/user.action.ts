import { Action, createAction, props } from '@ngrx/store';
import { IBook, IUser } from 'src/app/utils/interface';

export const USER_LOGIN = createAction('[USER] login', props<{user: IUser}>())
export const GET_USER = createAction('[USER] get user')
export const ADD_BOOK_TO_READING_IN_PROGRESS = createAction('[USER] add book to reading in progress', props<{book: IBook}>())
