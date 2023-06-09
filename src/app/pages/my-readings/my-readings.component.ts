import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectReadingsFinished, selectReadingsInProgress } from 'src/app/services/store/user.reducer';
import { IBook } from 'src/app/utils/interface';

@Component({
  selector: 'app-my-readings',
  templateUrl: './my-readings.component.html',
  styleUrls: ['./my-readings.component.scss']
})
export class MyReadingsComponent  {

  constructor(private router: Router, private store: Store) {}
  titleButton = "Ajouter une lecture"
  titleButtonFinished = "Terminés"
  titleButtonInProgress = "En cours"

  booksFinished : Observable<IBook[]>= this.store.select(selectReadingsFinished) || [];

  booksInProgress : Observable<IBook[]> = this.store.select(selectReadingsInProgress) || [];

  finished = false;

  redirectToAddBook() {
    this.router.navigate(['/add-book'])
  }

  filterBooksByFinished() {
    this.finished = true;
  }

  filterBooksByInProgress() {
    this.finished = false;
  }

}
