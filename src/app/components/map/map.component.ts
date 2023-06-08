import { Component, Input } from '@angular/core';
import * as Leaflet from 'leaflet';
import { RecordBookBox } from 'src/app/utils/interface';

Leaflet.Icon.Default.mergeOptions({
});

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {

  @Input() bookBox: RecordBookBox[] = [];

  map!: Leaflet.Map;
  markers: Leaflet.Marker[] = [];
  options = {
    layers: [
      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
    ],
    zoom: 16,
    center: { lat: 47.383331, lng: 0.68333 }
  }

  initMarkers() {
    const initialMarkers = [
      {
        position: { lat: 47.4029308004, lng: 0.6939477996 },
        draggable: true
      },
      {
        position: { lat: 47.3844517138, lng: 0.686212135 },
        draggable: false
      },
      {
        position: { lat: 47.3871406002, lng: 0.7228583997 },
        draggable: true
      }
    ];
    for (let index = 0; index < initialMarkers.length; index++) {
      const data = initialMarkers[index];
      const marker = this.generateMarker(data, index);
      marker.addTo(this.map).bindPopup(`<b>${data.position.lat},  ${data.position.lng}</b>`);
      this.map.panTo(data.position);
      this.markers.push(marker)
    }
  }

  generateMarker(data: any, index: number) {
    return Leaflet.marker(data.position, { draggable: data.draggable })
  }

  onMapReady($event: Leaflet.Map) {
    this.map = $event;
    this.initMarkers();
  }
  
}
