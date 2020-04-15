import {Component, OnInit} from '@angular/core';
import {movies} from '../../../movie.mocks-data';
import {ICinema} from '../../interfaces/cinema';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.css']
})
export class CinemaListComponent implements OnInit {
  cinemaList: ICinema[] = movies;
  genreList = ['action', 'adventure', 'biography', 'comedy', 'crime', 'drama', 'history', 'mystery', 'scifi', 'sport', 'thriller'];
  name = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.name.valueChanges.subscribe(name => {
      this.cinemaList = movies.filter(cinema => cinema.name.toLowerCase().includes(name.toLowerCase()));
    });
  }

  getFilter(genre: string) {
    this.cinemaList = movies.filter(cinema => cinema.genres.some(item => item === genre));
  }
}
