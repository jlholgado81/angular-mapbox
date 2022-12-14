import { Component } from '@angular/core';

import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private readonly _placesService: PlacesService,
    private readonly _mapService: MapService
  ) { }

  goToMyLocation() {
    if (!this._placesService.isUserLocationReady) throw Error('There is no user location');
    if (!this._mapService.isMapReady) throw Error('Map is not available');

    this._mapService.flyTo(this._placesService.userLocation!);
  }
}
