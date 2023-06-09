import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/utils/interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() books : IBook[] | null= [];
  @Input() showPages = false;

  booksSorted : IBook[] = [];

  sortBooks(a: IBook, b: IBook) {
    if(a.progress > b.progress) {
      return -1
    } else if (a.progress < b.progress) {
      return 1
    } else {
      return 0
    }
  }

  ngOnInit() {
    if(this.books){
      const booksToFilter = [...this.books]
      booksToFilter.sort(this.sortBooks)
      this.books = [...booksToFilter]
    }
  }
}
