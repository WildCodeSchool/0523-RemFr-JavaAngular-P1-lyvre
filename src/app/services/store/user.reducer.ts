import { IBook, IUser } from "src/app/utils/interface";
import { createSelector } from "@ngrx/store";

export interface IUserState {
  readonly user: IUser;
}

export const initialState: IUserState = {
  user : {
    id: 0,
    name: 'test',
    email: '',
    password: '',
    reading_in_progress: [],
    reading_finished: []
  }
}

export const selectUserState = (state: any) => state;
export const selectUser = createSelector(
  selectUserState,
  (state: any) => state.userState.user
);

export const selectReadingsInProgress = createSelector(
  selectUserState,
  (state: any) => state.userState.user.reading_in_progress
);

export const selectReadingsFinished = createSelector(
  selectUserState,
  (state: any) => state.userState.user.reading_finished
);

export function reducer(state= initialState, action: any) {
  switch(action.type){
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'ADD_BOOK_TO_READING_IN_PROGRESS':
      return {
        ...state,
        user : {
          ...state.user,
          reading_in_progress: [...state.user.reading_in_progress, action.payload.book]
        }
      }
    case 'DELETE_BOOK_FROM_READING_IN_PROGRESS':{
      const index = state.user.reading_in_progress.findIndex((book: IBook) => book.id === action.payload.book.id && book.progress === action.payload.book.progress)
      const readingInProgress = [...state.user.reading_in_progress]
      if(index !== -1) {
        readingInProgress.splice(index, 1)
        return {
          ...state,
          user: {
            ...state.user,
            reading_in_progress: readingInProgress
          }
        }
      }
      return {
        ...state,
      }
    }
    default:
      return state;
  }
}
