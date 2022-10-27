import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private _debounceTimer?: NodeJS.Timeout;

  constructor(
    private readonly _placesService: PlacesService
  ) { }

  onQueryChanged(query: string = '') {
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    
    this._debounceTimer = setTimeout(() => {
      this._placesService.getPlacesByQuery(query);
    }, 350);
  }
}
