import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books/books.service';
import { IBook } from 'src/app/utils/interface';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  books: IBook[] = [];
  filteredBooks: IBook[] = [];

  formBook = new FormControl('');

  constructor(private booksService: BooksService) {}

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
}
