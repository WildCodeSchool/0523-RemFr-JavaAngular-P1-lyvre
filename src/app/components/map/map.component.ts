import { Component, Input, OnInit } from "@angular/core";
import * as Leaflet from "leaflet";
import { GeoShape, RecordBookBox } from "src/app/utils/interface";
import { BookBoxService } from "src/app/services/bookBox/book-box.service";

Leaflet.Icon.Default.mergeOptions({});

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
})
export class MapComponent implements OnInit {
  constructor(private bookBoxService: BookBoxService) {}

  @Input() bookBox: RecordBookBox[] = [];

  map!: Leaflet.Map;

  //47.39049402643878, 0.6893818997045823 coordonnées de l'hotel de ville de tours, emplacement arbitraire par défaut
  public userLatitude = 47.39049402643878;
  public userLongitude = 0.6893818997045823;

  options = {
    layers: [
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }),
    ],
    zoom: 16,
    center: { lat: this.userLatitude, lng: this.userLongitude },
  };

  ngOnInit(): void {
    // Demande de l'emplacement de l'utilisateur via le navigateur (popup Autoriser/Refuser)
    navigator.geolocation.getCurrentPosition((position) => {
      // Dans le cas où l'utilisateur autorise la géolocalisation, on change les coordonées avec celles que donnent le navigateur
      this.userLatitude = position.coords.latitude;
      this.userLongitude = position.coords.longitude;

      // La carte se recentre sur la position de l'utilisateur, avec une valeur de zoom à 16
      this.map.setView([this.userLatitude, this.userLongitude], 16);
    });
  }

  //quand carte prête, on initialise la map et les marqueurs
  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }

  initMarkers() {
    //génère tableau vide qui contiendra les marqueurs
    const initialMarkers: GeoShape[] = [];

    //observable = event que l'on va observer ($ = convention pour mentionner que c'est un observable)
    //Fait l'appel d'API
    const observableApiBookBox$ = this.bookBoxService.getBookBox();
    //.subscribe = va chercher la valeur de l'event = renvoie la rép de l'API
    observableApiBookBox$.subscribe({
      //une fois qu'API a répondu :
      next(apiBookBox) {
        //pour chaque valeur envoyée on l'envoie dans le tableau
        apiBookBox.records.forEach(function (record) {
          initialMarkers.push(record.fields.geo_shape);
        });
      },
      //Une fois tout ok, on les affiche
      complete() {
        showMarker(initialMarkers);
      },
    });

    //on reprend le tableau, et pour chaque coordonée du tableau, on l'ajoute à la carte
    const showMarker = (initialMarkers: GeoShape[]) => {
      for (let i = 0; i < initialMarkers.length; i++) {
        const marker = Leaflet.marker([
          initialMarkers[i].coordinates[1],
          initialMarkers[i].coordinates[0],
        ]);
        marker.addTo(this.map);
      }
    };
  }
}
