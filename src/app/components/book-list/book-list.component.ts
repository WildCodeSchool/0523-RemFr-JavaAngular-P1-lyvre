import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IBook } from "src/app/utils/interface";

@Component({
    selector: "app-book-list",
    templateUrl: "./book-list.component.html",
    styleUrls: ["./book-list.component.scss"],
})
export class BookListComponent implements OnInit {
    constructor(private store: Store) {}

    @Input() books: IBook[] | null = [];
    @Input() showPages = false;

    booksSorted: IBook[] = [];

    sortBooks(a: IBook, b: IBook) {
        if (a.progress > b.progress) {
            return -1;
        } else if (a.progress < b.progress) {
            return 1;
        } else {
            return 0;
        }
    }

    deleteBook(book: IBook) {
        this.store.dispatch({
            type: "DELETE_BOOK_FROM_READING_IN_PROGRESS",
            payload: { book },
        });
    }

    ngOnInit() {
        if (this.books) {
            const booksToFilter = [...this.books];
            booksToFilter.sort(this.sortBooks);
            this.books = [...booksToFilter];
        }
    }
}
