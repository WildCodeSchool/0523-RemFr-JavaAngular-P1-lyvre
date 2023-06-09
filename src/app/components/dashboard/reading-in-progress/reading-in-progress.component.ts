import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading-in-progress',
  templateUrl: './reading-in-progress.component.html',
  styleUrls: ['./reading-in-progress.component.scss']
})
export class ReadingInProgressComponent {

  constructor(private router: Router) {}

  titleButton = "Ajouter une lecture"

  redirectToAddBook() {
    this.router.navigate(['/add-book'])
  }
}
