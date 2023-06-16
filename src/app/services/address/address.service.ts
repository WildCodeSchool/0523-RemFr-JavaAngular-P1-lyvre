import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureCollection } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(public http: HttpClient) { }

  getAddress(data: string): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>("https://api-adresse.data.gouv.fr/search/?q=" + data)
  }

  getAddressFromPosition(data: [number, number]): Observable<FeatureCollection> {
    return this.http.get<FeatureCollection>(`https://api-adresse.data.gouv.fr/reverse/?lon=${data[0]}&lat=${data[1]}`)
  }
}
