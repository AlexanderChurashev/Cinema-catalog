import { Injectable } from '@angular/core';
import {ICinema} from '../interfaces/cinema';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  currentMovie: ICinema;
  constructor() { }
}
