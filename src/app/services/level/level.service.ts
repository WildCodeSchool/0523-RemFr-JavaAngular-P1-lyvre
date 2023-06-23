import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ILevel } from 'src/app/utils/interface';


@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(private http: HttpClient) {}

  getLevels(): Observable<ILevel[]> {
   return this.http.get<ILevel[]>("assets/data/mock-level.json");
  }

}
