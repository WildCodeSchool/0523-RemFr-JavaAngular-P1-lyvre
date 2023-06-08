import { IUser } from "src/app/utils/interface";
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

export const selectUserReadingInProgress = createSelector(
  selectUserState,
  (state: any) => state.userState.user.reading_in_progress
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
          reading_in_progress: [...state.user.reading_in_progress, action.payload]
        }
      }
    default:
      return state;
  }
}