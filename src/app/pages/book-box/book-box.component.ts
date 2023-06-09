import { Component, OnInit } from '@angular/core';
import { BookBoxService } from 'src/app/services/bookBox/book-box.service';
import { RecordBookBox } from 'src/app/utils/interface';

@Component({
  selector: 'app-book-box',
  templateUrl: './book-box.component.html',
  styleUrls: ['./book-box.component.scss']
})

export class BookBoxComponent implements OnInit {

  bookBox: RecordBookBox[] = [];

  constructor(public bookBoxService: BookBoxService){}
  
  ngOnInit(): void {
    this.bookBoxService.getBookBox().subscribe(bookBoxData => this.bookBox = bookBoxData.records)
  }
}
