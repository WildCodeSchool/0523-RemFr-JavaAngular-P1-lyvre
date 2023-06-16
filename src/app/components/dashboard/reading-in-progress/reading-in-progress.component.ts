import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from "rxjs";
import { selectAllReadings } from "src/app/services/store/user.reducer";
import { IBook } from "src/app/utils/interface";

@Component({
  selector: 'app-reading-in-progress',
  templateUrl: './reading-in-progress.component.html',
  styleUrls: ['./reading-in-progress.component.scss']
})
export class ReadingInProgressComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store
    ) {}

  titleButton = "Ajouter une lecture"

  redirectToAddBook() {
    this.router.navigate(['/add-book'])
  }

  //redirection vers les lectures en cours pour ajout de la progression
  buttonTitle = "Noter ma progression"
  redirectToReadingInProgress(){
    this.router.navigate(['/my-readings'])
  }

    //on récupère le param id
    id = this.activatedRoute.snapshot.paramMap.get("id");
    book: IBook = {
        id: 0,
        name: "",
        author: "",
        genre: [],
        image: "",
        pages: 1,
        upvote: 0,
        downvote: 0,
        progress: 0,
        isFinished: false,
        lastUpdate: new Date()
    };
    booksInProgress: Observable<IBook[]> =
        this.store.select(selectAllReadings) || [];


  //code brut en attendant
  //mettre des infos d'un livre ici - dans chaque slides il faudra avoir les infos du livre dont je veux afficher la progression
  //quand je vais appeler le slide, 
  public slides = [
    {
      "name": "1984",
      "author": "George Orwell",
      "genre": ["Dystopie", "Science Fiction", "Fiction politique"],
      "pages": 328,
      "id": 1,
      "upvote": 0,
      "downvote": 0,
      "image": "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
      "progress": 125,
      "isFinished": false,
      "lastUpdate" : "2023-06-14T00:00:00.000Z"
    },
    {
      "name": "1984",
      "author": "George Orwell",
      "genre": ["Dystopie", "Science Fiction", "Fiction politique"],
      "pages": 328,
      "id": 1,
      "upvote": 0,
      "downvote": 0,
      "image": "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
      "progress": 125,
      "isFinished": false,
      "lastUpdate" : "2023-06-14T00:00:00.000Z"
    },
  ];

}
