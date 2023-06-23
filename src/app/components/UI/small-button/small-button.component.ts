import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.scss']
})
export class SmallButtonComponent {
  @Input() title = '';
  @Input() onClick = () => {
    //
  };
  @Input() display = false;
}

