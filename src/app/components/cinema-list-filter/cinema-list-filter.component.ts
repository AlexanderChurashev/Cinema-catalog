import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ICinema} from '../../interfaces/cinema';
import {movies} from '../../../movie.mocks-data';

@Component({
  selector: 'app-cinema-list-filter',
  templateUrl: './cinema-list-filter.component.html',
  styleUrls: ['./cinema-list-filter.component.css']
})
export class CinemaListFilterComponent implements OnChanges {
  @Input() cinema: ICinema;
  cinemaList: ICinema[] = movies;
  cinemaListFilter: ICinema[];

  constructor() { }

  ngOnChanges({cinema}: SimpleChanges): void {
    if (cinema && cinema.currentValue) {
      this.cinemaListFilter = this.getFilterCinemaList(this.cinema);
    }
  }

  getFilterCinemaList(cinema: ICinema): ICinema[] {
    return this.cinemaList
      .filter(item => item.id !== cinema.id)
      .filter(film => cinema.genres.some(genre => film.genres.includes(genre)));
  }
}
