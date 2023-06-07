import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from '../../utils/interface';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {}

   getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>("assets/data/mock-books.json");
   }

}
