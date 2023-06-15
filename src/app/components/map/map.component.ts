import { Component, Input, OnInit } from "@angular/core";
import * as Leaflet from "leaflet";
import { RecordBookBox, RecordFields } from "../../utils/interface";
import { BookBoxService } from "../../services/bookBox/book-box.service";
import * as L from "leaflet";

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
    //TODO : Connecter les résultats de la géolocalisation au formulaire
    //TODO : Renvoyer l'adresse exacte via les coordonées Latitude/Longitude
    //API du gouvernement : https://adresse.data.gouv.fr/api-doc/adresse
    getCoordinates(event: [number, number]) {
        this.userLatitude = event[1];
        this.userLongitude = event[0];
        this.map.setView([this.userLatitude, this.userLongitude], 16);
        const marker = Leaflet.marker([
            this.userLatitude,
            this.userLongitude,
        ]).addTo(this.map);
        marker.bindPopup("Vous êtes ici").openPopup();
    }

    //47.39049402643878, 0.6893818997045823 coordonnées de l'hotel de ville de tours, emplacement arbitraire par défaut
    public userLatitude = 47.39049402643878;
    public userLongitude = 0.6893818997045823;

    options = {
        layers: [
            Leaflet.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                }
            ),
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
        const initialMarkers: RecordFields[] = [];

        //observable = event que l'on va observer ($ = convention pour mentionner que c'est un observable)
        //Fait l'appel d'API
        const observableApiBookBox$ = this.bookBoxService.getBookBox();
        //.subscribe = va chercher la valeur de l'event = renvoie la rép de l'API
        observableApiBookBox$.subscribe({
            //une fois qu'API a répondu :
            next(apiBookBox) {
                //pour chaque valeur envoyée on l'envoie dans le tableau
                apiBookBox.records.forEach(function (record) {
                    initialMarkers.push(record.fields);
                });
            },
            //Une fois tout ok, on les affiche
            complete() {
                showMarker(initialMarkers);
            },
        });

        //on reprend le tableau, et pour chaque coordonnée du tableau, on l'ajoute à la carte
        const showMarker = (initialMarkers: RecordFields[]) => {
            for (let i = 0; i < initialMarkers.length; i++) {
                const marker = Leaflet.marker([
                    initialMarkers[i].geo_shape.coordinates[1],
                    initialMarkers[i].geo_shape.coordinates[0],
                ]);

                let contenuPopup = "";

                if (initialMarkers[i].photo) {
                    contenuPopup +=
                        '<br><img class="custom-popup leaflet-popup-content-img" width= 40%; src="' +
                        initialMarkers[i].photo +
                        '">';
                } else {
                    contenuPopup +=
                        '<br><img class="custom-popup leaflet-popup-content-img" width=40% src="../assets/bal-default_image.png">';
                }

                contenuPopup +=
                    '<div class="text-popup">' +
                    initialMarkers[i].nom +
                    "</div><br>" +
                    '<div class="text-popup-italic">' +
                    initialMarkers[i].adresse +
                    " " +
                    initialMarkers[i].code_postal +
                    " " +
                    initialMarkers[i].commune +
                    "</div>";

                if (initialMarkers[i].gestionnaire) {
                    contenuPopup +=
                        '<div class="text-popup-italic"><br>' +
                        "Gestionnaire : " +
                        initialMarkers[i].gestionnaire +
                        "</div>";
                } else {
                    contenuPopup += "";
                }

                marker.bindPopup(contenuPopup).openPopup();

                marker.addTo(this.map);
            }
        };
    }
}
