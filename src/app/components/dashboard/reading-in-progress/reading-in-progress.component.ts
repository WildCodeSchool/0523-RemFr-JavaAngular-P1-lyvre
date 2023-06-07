import { Component } from '@angular/core';

@Component({
  selector: 'app-reading-in-progress',
  templateUrl: './reading-in-progress.component.html',
  styleUrls: ['./reading-in-progress.component.scss']
})
export class ReadingInProgressComponent {

  titleButton = "Ajouter une lecture"

  redirectToAddBook() {
    console.log("yes")
  }
}
