import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1Ijoiamxob2xnYWRvODEiLCJhIjoiY2w5bDlqZW5oMG50ZjN1cGwxamR3cW1ncSJ9.eivIss_hBaPND9jSI6tCCw';

if (!navigator.geolocation) {
  alert('Browser does not support Geolocation feature');
  throw new Error('Browser does not support Geolocation feature');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
