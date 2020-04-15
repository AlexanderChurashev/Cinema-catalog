import {Component, OnInit} from '@angular/core';
import {ICinema} from '../../interfaces/cinema';
import {ActivatedRoute} from '@angular/router';
import {movies} from '../../../movie.mocks-data';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.css']
})
export class CinemaDetailsComponent implements OnInit {
  cinema$: Observable<ICinema>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cinema$ = this.route.params.pipe(
      map(value => {
        return movies.find(movie => {
          return movie.id === +value.id;
        });
      })
    );
  }
}
