import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectChallenge } from 'src/app/services/store/user.reducer';
import { IChallenge } from 'src/app/utils/interface';
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "../../carousel/carousel.animations";

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
  animations: [
    trigger("carouselAnimation", [
        transition("void => *", [
            useAnimation(fadeIn, { params: { time: "250ms" } }),
        ]),
        transition("* => void", [
            useAnimation(fadeOut, { params: { time: "250ms" } }),
        ]),
        /* scale */
        transition("void => *", [
            useAnimation(scaleIn, { params: { time: "250ms" } }),
        ]),
        transition("* => void", [
            useAnimation(scaleOut, { params: { time: "250ms" } }),
        ]),
    ]),
],
})
export class ChallengeComponent implements OnInit{
  constructor(private store: Store){}

  challengesObservable : Observable<IChallenge[]> = this.store.select(selectChallenge);
  challenges : IChallenge[] = []

  ngOnInit(): void {
    this.challengesObservable.subscribe((challenges: IChallenge[]) => {
      this.challenges = challenges;
    })
  }

  getPercentage(challenge: IChallenge) {
    return challenge.progress / challenge.totalRequired * 100;
  }

  currentSlide = 0;

  onPreviousClick() {
      const previous = this.currentSlide - 1;
      this.currentSlide = previous < 0 ? this.challenges.length - 1 : previous;
  }

  onNextClick() {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.challenges.length ? 0 : next;
  }
}
