import { Component, OnInit } from "@angular/core";
import { selectAllBadges } from "src/app/services/store/user.reducer";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { IBadge } from "src/app/utils/interface";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
    badgesObservable: Observable<IBadge[]> =
        this.store.select(selectAllBadges) || [];

    badges: IBadge[] = [];

    ngOnInit(): void {
        this.badgesObservable.subscribe((badge) => {
          this.badges = badge.slice();
          this.badges.sort((a, b) => {
            if (a.isFinished && !b.isFinished) {
              return -1;
            } else if (!a.isFinished && b.isFinished) {
              return 1;
            } else {
              return 0;
            }
          });

        });
    }
    constructor(private store: Store) {}
}
