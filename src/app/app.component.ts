import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './utils/interface';
import { selectUser } from './services/store/user.reducer'
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  user$ : Observable<IUser> = this.store.select(selectUser)

  constructor(private store: Store, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => this.store.dispatch({type: 'USER_LOGIN', payload: user}))
  }

}
