import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IBadge } from 'src/app/utils/interface';
import { ModalService } from "src/app/services/modal/modal.service";
import {
  trigger,
  transition,
  style,
  animate,
  useAnimation,
} from "@angular/animations";
import { fadeIn, fadeOut, scaleIn, scaleOut } from "../carousel/carousel.animations";
@Component({
  selector: 'app-modal-badges',
  templateUrl: './modal-badges.component.html',
  styleUrls: ['./modal-badges.component.scss'],
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
]
})
export class ModalBadgesComponent {
  constructor( protected modalService: ModalService) {}

  @Input() badges: IBadge[] = [];
  @Output() closeBadgeModal = new EventEmitter<void>();

  closeModal() {
    this.closeBadgeModal.emit();
  }

  currentSlide = 0;

  onPreviousClick() {
      const previous = this.currentSlide - 1;
      this.currentSlide = previous < 0 ? this.badges.length - 1 : previous;
  }

  onNextClick() {
      const next = this.currentSlide + 1;
      this.currentSlide = next === this.badges.length ? 0 : next;
  }
}
