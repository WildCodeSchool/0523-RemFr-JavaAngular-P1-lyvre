import { IBook, IUser } from "src/app/utils/interface";
import { createSelector } from "@ngrx/store";

import { initialState } from "./initialState";
import { challengeBooks } from "./challengeBooks";

export interface IUserState {
    readonly user: IUser;
}

export const selectUserState = (state: any) => state;
export const selectUser = createSelector(
    selectUserState,
    (state: any) => state.userState.user
);

export const selectChallenge = createSelector(
    selectUserState,
    (state: any) => state.userState.user.challenges
)

export const selectReadingsInProgress = createSelector(
    selectUserState,
    (state: any) => state.userState.user.reading_in_progress
);

export const selectReadingsFinished = createSelector(
    selectUserState,
    (state: any) => state.userState.user.reading_finished
);

export const selectAllReadings = createSelector(
    selectUserState,
    (state: any) => {
        const readingFinished = state.userState.user.reading_finished;
        const readingInProgress = state.userState.user.reading_in_progress;
        return readingFinished.concat(readingInProgress);
    }
);

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "ADD_BOOK_TO_READING_IN_PROGRESS":
            return {
                ...state,
                user: {
                    ...state.user,
                    reading_in_progress: [
                        ...state.user.reading_in_progress,
                        action.payload.book,
                    ],
                },
            };
        case "DELETE_BOOK_FROM_READING_IN_PROGRESS": {
            const index = state.user.reading_in_progress.findIndex(
                (book: IBook) => book.id === action.payload.book.id
            );
            const readingInProgress = [...state.user.reading_in_progress];
            if (index !== -1) {
                readingInProgress.splice(index, 1);
                return {
                    ...state,
                    user: {
                        ...state.user,
                        reading_in_progress: readingInProgress,
                    },
                };
            }
            return {
                ...state,
            };
        }
        case "BOOK_IS_FINISHED": {
            //cherche l'index des livres en cours grâce à l'id
            const book = { ...action.payload };
            book.isFinished = true;
            const index = state.user.reading_in_progress.findIndex(
                (book: IBook) => book.id === action.payload.id
            );
            const readingInProgress = [...state.user.reading_in_progress];
            //si il trouve un livre passe ici
            if (index !== -1) {
                const challenges = challengeBooks(action.payload, state.user, true)
                const readingFinished = [...state.user.reading_finished];
                //ajoute aux livres terminés
                readingFinished.push(book);
                //le supprime des livres en cours
                readingInProgress.splice(index, 1);
                return {
                    ...state,
                    user: {
                        ...state.user,
                        reading_in_progress: readingInProgress,
                        reading_finished: readingFinished,
                        challenges: challenges
                    },
                };
            }
            return {
                ...state,
            };
        }
        case "BOOK_IS_UPDATED": {
            const index = state.user.reading_in_progress.findIndex(
                (book: IBook) => book.id === action.payload.id
            );
            const readingInProgress = [...state.user.reading_in_progress];
            if (index !== -1) {
                const challenges = challengeBooks(action.payload, state.user, false)
                readingInProgress.splice(index, 1);
                readingInProgress.push(action.payload);
                return {
                    ...state,
                    user: {
                        ...state.user,
                        reading_in_progress: readingInProgress,
                        challenges: challenges
                    },
                };
            }
            return {
                ...state,
            };
        }

        case "LIKE_OR_DISLIKE_BOOK": {
            const readingFinished = state.user.reading_finished;
            const readingInProgress = state.user.reading_in_progress;
            const readingProgress = [...readingInProgress];
            const readingIsFinished = [...readingFinished];
            const allReadings = readingFinished.concat(readingInProgress);
            const book = allReadings.find(
                (book: IBook) => book.id === action.payload.book.id
            );
            //action.payload = on recup ce que l'on reçoit
            if (book) {
                const bookClone = { ...book };
                if (
                    action.payload.like === "like" &&
                    book.downvote === 0 &&
                    book.upvote === 0
                ) {
                    bookClone.upvote += 1;
                } else if (
                    action.payload.like === "dislike" &&
                    book.downvote === 0 &&
                    book.upvote === 0
                ) {
                    bookClone.downvote += 1;
                } else if (
                    action.payload.like === "like" &&
                    book.downvote === 1 &&
                    book.upvote === 0
                ) {
                    bookClone.downvote -= 1;
                    bookClone.upvote += 1;
                } else if (
                    action.payload.like === "dislike" &&
                    book.downvote === 0 &&
                    book.upvote === 1
                ) {
                    bookClone.downvote += 1;
                    bookClone.upvote -= 1;
                }
                if (book.isFinished) {
                    const index = readingFinished.findIndex(
                        (book: IBook) => book.id === action.payload.book.id
                    );
                    readingIsFinished.splice(index, 1);
                    readingIsFinished.push(bookClone);
                } else {
                    const index = readingInProgress.findIndex(
                        (book: IBook) => book.id === action.payload.book.id
                    );
                    readingProgress.splice(index, 1);
                    readingProgress.push(bookClone);
                }
                return {
                    ...state,
                    user: {
                        ...state.user,
                        reading_in_progress: readingProgress,
                        reading_finished: readingIsFinished,
                    },
                };
            }
            return {
                ...state,
            };
        }
        case "UPDATE_BADGES": {
            return {
                ...state,
                user: {
                  ...state.user,
                  badges: action.payload,
                }
            }

        }
        default:
            return state;
    }
}
