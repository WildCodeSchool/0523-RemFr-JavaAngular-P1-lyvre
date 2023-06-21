import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { isBadgeCompleted } from "src/app/services/store/badges";
import { initialState } from "src/app/services/store/initialState";
import { selectAllReadings, selectUser } from "src/app/services/store/user.reducer";
import { IBook, IUser } from "src/app/utils/interface";

@Component({
    selector: "app-progress",
    templateUrl: "./progress.component.html",
    styleUrls: ["./progress.component.scss"],
})
export class ProgressComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private store: Store,
        private router: Router
    ) {}

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
        created: new Date(),
        lastUpdate: new Date()
    };
    booksInProgress: Observable<IBook[]> =
        this.store.select(selectAllReadings) || [];

    //calculer le % d'avancée de lecture
    progressPercentage = 0;
    progress = 0;

    userObservable = this.store.select(selectUser);
    user: IUser = initialState.user;

    markAsFinished() {
      this.store.dispatch({
          type: "BOOK_IS_FINISHED",
          payload: this.book,
      });
      const {badges, newBadges} = isBadgeCompleted(this.book, this.user, false);
      this.store.dispatch({
          type: 'UPDATE_BADGES',
          payload: badges
      })
      if(newBadges.length === 0) {
        this.router.navigate(["/my-readings", "finished"]);
      } else {
        // animation badge puis redirection
      }
    }
    titleButton = "Marquer comme terminé";
    titleButtonSave = "Sauvegarder";

    isLiked = false;
    isDisliked = false;

    bookLike() {
        this.isLiked = !this.isLiked;

        if (this.isLiked) {
            if (this.isDisliked) {
                this.isDisliked = false; //Désactive le dislike uniquement s'il est déjà activé
            }
        }
    }

    bookDislike() {
        this.isDisliked = !this.isDisliked;

        if (this.isDisliked) {
            this.isLiked = false; //Désactive le like lorsque le dislike est activé
        }
    }

    likeOrDislike(data: string) {
        this.store.dispatch({
            type: "LIKE_OR_DISLIKE_BOOK",
            payload: { book: this.book, like: data },
        });
    }

    redirectToReadingInProgress() {
        this.router.navigate(["/my-readings", "inProgress"]);
    }

    onSubmit() {
        this.progress = this.pages.value || 0;
        const book = { ...this.book };
        book.progress = this.progress;
        book.lastUpdate = new Date();
        this.store.dispatch({
            type: "BOOK_IS_UPDATED",
            payload: book,
        });
        if (this.progress == this.book.pages) {
            this.progressPercentage = 100;
        } else if (this.book.progress > this.book.pages) {
            this.progressPercentage = 100;
            this.progress = this.book.pages;
        } else {
            this.progressPercentage = Math.floor(
                (this.progress / this.book.pages) * 100
            );
        }
    }

    pages = new FormControl(0);

    ngOnInit(): void {
      this.userObservable.subscribe(user => this.user = user)
        this.booksInProgress
            .pipe(
                map((books) =>
                    books.find((book) => book.id.toString() === this.id)
                )
            )
            .subscribe((book) => {
                if (book) this.book = book;
            });
        this.progress = this.book.progress;
        //calculer le % d'avancée de lecture
        this.progressPercentage = Math.floor(
            (this.progress / this.book.pages) * 100
        );
        this.pages.setValue(this.progress);
        if (this.book.upvote === 1) {
            this.isLiked = true;
        } else if (this.book.downvote === 1) {
            this.isDisliked = true;
        }
    }
}
