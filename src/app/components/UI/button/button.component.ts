import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  constructor(private router: Router, private store: Store) {}

  @Input() title = '';
  @Input() onClick = () => {
    //
  };

}
