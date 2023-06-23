import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IBadge } from "src/app/utils/interface";
import { ModalService } from "src/app/services/modal/modal.service";

@Component({
    selector: "app-display-badges",
    templateUrl: "./display-badges.component.html",
    styleUrls: ["./display-badges.component.scss"],
})
export class DisplayBadgesComponent implements OnInit {
    constructor(private store: Store, protected modalService: ModalService) {}

    @Input()
    badges: IBadge[] = [];

    numberOfBadges = 4;

    badgesToShow: IBadge[] = [];

    seeMore = "Voir plus";

    seeLess = "Voir moins";

    ngOnInit(): void {
        // this.badgesToShow = this.badges.slice(0, 4);
        // console.log(this.badges);
        console.log(this.badges);
    }

    showMoreBadges() {
        this.numberOfBadges = this.badges.length;
        console.log("test");
    }

    showLessBadges() {
        this.numberOfBadges = 4;
    }

    progressPercentage = 0;

    barProgression(badge: IBadge) {
        return Math.floor((badge.progress / badge.totalRequired) * 100);
    }
}
