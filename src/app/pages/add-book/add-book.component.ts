import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { IBook } from 'src/app/utils/interface';
import {FormControl} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  books: IBook[] = [];
  filteredBooks: IBook[] = [];

  formBook = new FormControl('');

  constructor(private booksService: BooksService, private userService: UserService, private store: Store) {}

  filterBooks() {
    const filterValue = this.formBook.value?.toLowerCase() || '';

    this.filteredBooks = this.books.filter(book =>
      book.name.toLowerCase().includes(filterValue) ||
      book.author.toLowerCase().includes(filterValue)
    );
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((books) => this.books = books)
  }

  addBook(){
    const selectedBookId = this.books.find((book) => book.name === this.formBook?.value)
    if(selectedBookId){
      this.store.dispatch({type: 'ADD_BOOK_TO_READING_IN_PROGRESS', payload: {id: selectedBookId.id, pages: 0}})
    }
  }

  titleButton = "Ajouter un livre"
}

