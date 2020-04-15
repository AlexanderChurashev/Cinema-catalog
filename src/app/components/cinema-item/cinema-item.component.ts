import {Component, Input} from '@angular/core';
import {ICinema} from '../../interfaces/cinema';
import {CinemaService} from '../../services/cinema.service';

@Component({
  selector: 'app-cinema-item',
  templateUrl: './cinema-item.component.html',
  styleUrls: ['./cinema-item.component.css']
})
export class CinemaItemComponent {
  @Input() cinema: ICinema;

  constructor(private cinemaService: CinemaService) { }

  openCinema() {
    this.cinemaService.currentMovie = this.cinema;
  }
}
