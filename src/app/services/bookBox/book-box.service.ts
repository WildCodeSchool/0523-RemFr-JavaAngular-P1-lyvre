import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiBookBox } from "src/app/utils/interface";

@Injectable({
    providedIn: "root",
})
export class BookBoxService {
    constructor(public http: HttpClient) {}

    getBookBox(): Observable<ApiBookBox> {
        return this.http.get<ApiBookBox>(
            "https://data.tours-metropole.fr/api/records/1.0/search/?dataset=boites-a-livre-tours-metropole-val-de-loire&q=&rows=1000&facet=nom&facet=commune"
        );
    }
}
