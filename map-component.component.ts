import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-map-component',
  templateUrl: './map-component.component.html',
  styleUrls: ['./map-component.component.css']
})
export class MapComponentComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }

}
