import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from "rxjs";
import { selectAllReadings, selectReadingsInProgress } from "src/app/services/store/user.reducer";
import { IBook } from "src/app/utils/interface";

@Component({
  selector: 'app-reading-in-progress',
  templateUrl: './reading-in-progress.component.html',
  styleUrls: ['./reading-in-progress.component.scss']
})
export class ReadingInProgressComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
    ) {}

  titleButton = "Ajouter une lecture"

  redirectToAddBook() {
    this.router.navigate(['/add-book'])
  }
  
  booksInProgress: Observable<IBook[]> = this.store.select(selectReadingsInProgress) || [];

  ngOnInit(): void {
    this.booksInProgress.subscribe((data : IBook[]) => this.slides = data)
  }
  
  slides : IBook[] = [];

}
