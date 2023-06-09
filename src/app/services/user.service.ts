import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IUser } from '../utils/interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : any;

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>("assets/data/mock-user.json")
      .pipe(
        map((response: IUser[]) => {
          this.user = response;
          return response;
        })
      );
  }
}
