import { Component, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import { IBadge } from "src/app/utils/interface";
import { ModalService } from "src/app/services/modal/modal.service";

@Component({
    selector: "app-display-badges",
    templateUrl: "./display-badges.component.html",
    styleUrls: ["./display-badges.component.scss"],
})
export class DisplayBadgesComponent  {
    constructor(private store: Store, protected modalService: ModalService) {}

    @Input()
    badges: IBadge[] = [];

    numberOfBadges = 4;

    badgesToShow: IBadge[] = [];

    seeMore = "Voir plus";

    seeLess = "Voir moins";

    showMoreBadges() {
        this.numberOfBadges = this.badges.length;
    }

    showLessBadges() {
        this.numberOfBadges = 4;
    }

    progressPercentage = 0;

    barProgression(badge: IBadge) {
        return Math.floor((badge.progress / badge.totalRequired) * 100);
    }
}
