import { Action, createAction, props } from '@ngrx/store';
import { IBook, IUser } from 'src/app/utils/interface';

export const USER_LOGIN = createAction('[USER] login', props<{user: IUser}>())
export const GET_USER = createAction('[USER] get user')
export const ADD_BOOK_TO_READING_IN_PROGRESS = createAction('[USER] add book to reading in progress', props<{book: IBook}>())
export const DELETE_BOOK_FROM_READING_IN_PROGRESS = createAction('[USER] delete book from reading in progress', props<{book: IBook[]}>())
export const BOOK_IS_FINISHED = createAction('[USER] mark a book as finished', props<{book:IBook}>())
export const BOOK_IS_UPDATED = createAction('[USER] updates a book', props<{book:IBook}>())
export const LIKE_OR_DISLIKE_BOOK = createAction('[USER] likes or dislikes a book', props<{like:string, book:IBook}>())