import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl';

import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _mapService: MapService
  ) { }

  ngAfterViewInit(): void {
    if (!this._placesService.userLocation) throw Error('placesService.userLocation has no value');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/light-v10', // style URL
      center: this._placesService.userLocation,
      zoom: 14
    });

    const popup = new Popup()
    .setHTML(`
      <h6>Here I am</h6>
      <span>I'm in this part of the world</span>
    `);

    new Marker({ color: 'red' })
      .setLngLat(this._placesService.userLocation)
      .setPopup(popup)
      .addTo(map);

    this._mapService.setMap(map);
  }
}
