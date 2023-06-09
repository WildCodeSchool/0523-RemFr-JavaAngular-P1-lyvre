import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to-map',
  templateUrl: './go-to-map.component.html',
  styleUrls: ['./go-to-map.component.scss']
})
export class GoToMapComponent {
  constructor(private router: Router){ }
  titleButton = "Chercher une boîte à livre";

  redirectToBookBox(){
    this.router.navigate(['/book-box'])
  }
}
